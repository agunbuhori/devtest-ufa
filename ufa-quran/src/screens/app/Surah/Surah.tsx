import {AxiosResponse} from 'axios';
import React, {useEffect, useState} from 'react';
import {Box, Flex, Image, Pressable, ScrollView, Toast} from 'native-base';
import {StyleSheet, Text, StatusBar} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../constants/dimensions';
import {SurahData, SurahResponse} from './SurahProps';
import http from '../../../lib/http';
import SurahIcon from './SurahList';
import {RootStackParamList} from '../../AuthNavigator';
import useDidMount from '../../../lib/useDidMount';
import FullProgress from '../../../components/FullProgress';
import {useDispatch, useSelector} from 'react-redux';
import {fetchSurahSuccess} from '../../../redux/actions/SurahActions';
import {RootReducer} from '../../../redux';
import {SurahState} from '../../../redux/reducers/SurahReducer';

type Props = NativeStackScreenProps<RootStackParamList, 'Surah'>;

const SurahHeader = () => (
  <Box style={styles.header} justifyContent="center" alignItems="center">
    <Image
      source={require('../../../assets/img/quran.png')}
      h={94}
      w={160}
      mt={-10}
      alt="Quran"
    />
  </Box>
);

const SurahItem = ({item, onPress}: {item: SurahData; onPress: () => void}) => (
  <Pressable onPress={onPress}>
    <Flex style={styles.surahItem} direction="row" alignItems="center">
      <Box style={styles.surahNumber}>
        <Image
          source={require('../../../assets/img/frame.png')}
          width={42}
          height={42}
          alt="Frame"
          position="absolute"
        />
        <Text style={styles.surahNumberText}>{item.number}</Text>
      </Box>
      <Flex
        direction="row"
        flex={1}
        justifyContent="space-between"
        borderBottomWidth={1}
        borderBottomColor="rgb(250,	248,	237)"
        py={2}>
        <Box>
          <Text style={styles.lgText}>{item.englishName}</Text>
          <Text style={styles.surahEnglish}>
            {item.englishNameTranslation} ({item.numberOfAyahs})
          </Text>
        </Box>
        <Box style={styles.surahArabic}>{SurahIcon[item.number - 1]}</Box>
      </Flex>
    </Flex>
  </Pressable>
);
const Surah = ({navigation}: Props) => {
  const [loading, setLoading] = useState(true);
  const isMounted = useDidMount();
  const dispatch = useDispatch();

  const surahs = useSelector<RootReducer>(
    state => state.SurahReducer,
  ) as SurahState;

  useEffect(() => {
    if (surahs.fetched) {
      setLoading(false);
    } else {
      http
        .get('surah')
        .then((response: AxiosResponse<SurahResponse>) => {
          setLoading(false);
          dispatch(fetchSurahSuccess(response.data.data));
        })
        .catch(() => {
          Toast.show({
            title: 'Network error',
          });
          setLoading(false);
        });
    }
  }, [dispatch, isMounted, surahs]);

  return (
    <Box flex={1}>
      <StatusBar backgroundColor="rgb(29,45,74)" />
      <SurahHeader />
      <ScrollView flex={1} bgColor="red" height="full">
        <Box style={styles.surahBox}>
          {loading && <FullProgress />}

          {!loading && (
            <Box style={styles.surahList}>
              {surahs.data.map((item, index) => (
                <SurahItem
                  key={index}
                  item={item}
                  onPress={() => navigation.navigate('Read', item)}
                />
              ))}
            </Box>
          )}
        </Box>
      </ScrollView>
    </Box>
  );
};

const styles = StyleSheet.create({
  lgText: {
    fontSize: 16,
    fontFamily: 'FiraSans-Bold',
    color: '#333',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'FiraSans-Bold',
  },
  header: {
    height: SCREEN_WIDTH - 150,
    width: SCREEN_WIDTH,
    backgroundColor: 'rgb(29,45,74)',
    position: 'absolute',
  },
  surahBox: {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: '#FFF',
    width: '100%',
    minHeight: SCREEN_HEIGHT - SCREEN_WIDTH / 2,
    marginTop: 200,
  },
  surahList: {
    marginTop: 6,
    padding: 10,
  },
  surahItem: {
    padding: 5,
  },
  surahNumber: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    borderRadius: 10,
  },
  surahNumberText: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#333',
  },
  surahArabic: {
    maxHeight: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  surahEnglish: {
    fontSize: 12,
    fontFamily: 'FiraSans-Regular',
    color: '#888',
  },
});

export default Surah;
