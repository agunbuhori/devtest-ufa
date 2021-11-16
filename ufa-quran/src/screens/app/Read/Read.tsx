import React, {useEffect, useState} from 'react';
import {Box, Button, Flex, Image, ScrollView} from 'native-base';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import FeatherIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {RootStackParamList} from '../../AuthNavigator';
import http from '../../../lib/http';
import {AxiosResponse} from 'axios';
import {Ayah, ReadResponse} from './ReadProps';
import {SCREEN_HEIGHT} from '../../../constants/dimensions';
import useDidMount from '../../../lib/useDidMount';
import SurahIcon from '../Surah/SurahGoldList';
import FullProgress from '../../../components/FullProgress';
import {toArabicNumber} from '../../../lib/helpers';
import {useSelector} from 'react-redux';
import {RootReducer} from '../../../redux';
import {SurahState} from '../../../redux/reducers/SurahReducer';
type Props = NativeStackScreenProps<RootStackParamList, 'Read'>;

enum ReadMode {
  list = 'list',
  read = 'read',
}

const AyahItem = ({
  item,
  index,
  onPress,
}: {
  item: Ayah;
  index: number;
  onPress: () => void;
}) => (
  <TouchableOpacity
    activeOpacity={0.7}
    onPress={onPress}
    style={[styles.ayah, index % 2 === 0 ? styles.ayahEven : styles.ayahOdd]}>
    <Text style={styles.arabic}>
      {item.text}
      <Box justifyContent="center" alignItems="center" pt={-25}>
        <Image
          source={require('../../../assets/img/marker.png')}
          style={styles.marker}
          alt="marker"
        />
        <Text style={styles.markerText}>
          {toArabicNumber(item.numberInSurah)}
        </Text>
      </Box>
    </Text>
  </TouchableOpacity>
);

const Read = ({navigation, route}: Props) => {
  const surah = route.params;
  const [ayahs, setAyahs] = useState<Ayah[]>([]);
  const [loading, setLoading] = useState(true);
  const [readMode, setReadMode] = useState<ReadMode>(ReadMode.list);
  const [moved, setMoved] = useState(route.params.number);

  const isMounted = useDidMount();
  const surahs = useSelector<RootReducer>(
    state => state.SurahReducer,
  ) as SurahState;

  function move(idx: number) {
    setAyahs([]);
    setLoading(true);
    setMoved(prev => {
      if (prev === 1 && idx === -1) {
        return 114;
      } else if (prev === 114 && idx === +1) {
        return 1;
      }

      return moved + idx;
    });
  }

  useEffect(() => {
    navigation.setParams({
      number: moved,
      ...surahs.data.find(item => item.number === moved),
    });
  }, [moved, navigation, surahs.data]);

  useEffect(() => {
    if (route.params.number && isMounted) {
      http
        .get(`https://api.alquran.cloud/v1/surah/${route.params.number}`)
        .then((response: AxiosResponse<ReadResponse>) => {
          setAyahs(response.data.data.ayahs);
          setLoading(false);
        });
    }
  }, [route.params.number, isMounted]);

  return (
    <ScrollView flex={1} stickyHeaderIndices={[1]}>
      <Flex
        pt={3}
        height={50}
        overflow="hidden"
        justifyContent="center"
        w="full"
        bgColor="rgb(29,45,74)"
        alignItems="center">
        {SurahIcon[surah.number - 1]}
      </Flex>
      <Flex justifyContent="center" alignItems="center" zIndex={999}>
        <Box
          justifyContent="space-between"
          alignItems="stretch"
          width="full"
          px={6}
          py={3}
          bgColor="rgb(29,45,74)"
          flexDirection="row">
          <Button
            bgColor="rgba(0, 0, 0, 0.1)"
            size="sm"
            p={0.5}
            onPress={() => move(+1)}>
            <FeatherIcon name="chevron-left" size={30} color="white" />
          </Button>

          <Box alignItems="center" justifyContent="center">
            <Text style={styles.surahName}>
              {surah?.number}. {surah?.englishName}
            </Text>
            <Text style={styles.surahDetail}>
              {surah?.englishNameTranslation}, {surah?.revelationType},{' '}
              {surah?.numberOfAyahs} ayahs
            </Text>
          </Box>

          <Button
            bgColor="rgba(0, 0, 0, 0.1)"
            size="sm"
            p={0.5}
            onPress={() => move(-1)}>
            <FeatherIcon name="chevron-right" size={30} color="white" />
          </Button>
        </Box>
      </Flex>

      <Box>
        {readMode === ReadMode.list && (
          <Box minHeight={SCREEN_HEIGHT - 120} bgColor="white">
            {loading && <FullProgress />}
            {ayahs.map((item, index) => (
              <AyahItem
                key={index}
                index={index}
                item={item}
                onPress={() =>
                  navigation.navigate('Detail', {...item, ...route.params})
                }
              />
            ))}
          </Box>
        )}
      </Box>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  surahName: {
    fontFamily: 'FiraSans-Bold',
    fontSize: 18,
    color: 'white',
  },
  surahDetail: {
    fontFamily: 'FiraSans-Regular',
    fontSize: 14,
    color: 'white',
  },
  ayah: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  arabic: {
    fontSize: 26,
    fontWeight: '600',
    color: '#333',
    fontFamily: 'ut',
    textAlign: 'right',
  },
  ayahEven: {},
  ayahOdd: {
    backgroundColor: '#f8f8f8',
  },
  marker: {
    width: 32,
    height: 32,
    marginRight: 1,
    marginBottom: -10,
  },
  markerText: {
    fontSize: 14,
    position: 'absolute',
    fontFamily: 'arial',
    fontWeight: 'bold',
    paddingTop: 10,
  },
});

export default Read;
