import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Box, Image} from 'native-base';
import {ScrollView, StyleSheet, Text} from 'react-native';
import http from '../../../lib/http';
import useDidMount from '../../../lib/useDidMount';
import {RootStackParamList} from '../../AuthNavigator';
import {AyahDetail, ResponseAyahDetail} from './AyahProps';
import {AxiosResponse} from 'axios';
import {toArabicNumber} from '../../../lib/helpers';
import FullProgress from '../../../components/FullProgress';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const Detail = (props: Props) => {
  const [ayah, setAyah] = useState<AyahDetail>();
  const didMount = useDidMount();
  const [loading, setLoading] = useState(true);
  const {text, number, numberInSurah, englishName} = props.route.params;

  useEffect(() => {
    props.navigation.setOptions({
      title: englishName.concat(' : ').concat(numberInSurah.toString()),
    });
    if (didMount) {
      http
        .get(`ayah/${number}:${numberInSurah}/id.indonesian`)
        .then((response: AxiosResponse<ResponseAyahDetail>) => {
          setAyah(response.data.data);
          setLoading(false);
        });
    }
  }, [didMount, englishName, number, numberInSurah, props.navigation]);

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <Box px={6} py={12} alignItems="center" bgColor="#f2fcf6">
        <Text style={styles.arabic}>{text}</Text>
        <Box justifyContent="center" alignItems="center" pt={-25}>
          <Image
            source={require('../../../assets/img/marker.png')}
            style={styles.marker}
            alt="marker"
          />
          <Text style={styles.markerText}>{toArabicNumber(numberInSurah)}</Text>
        </Box>
      </Box>
      <Box p={6}>
        {loading && <FullProgress />}
        {!loading && (
          <Text style={styles.translation}>
            {ayah?.text} ({ayah?.numberInSurah})
          </Text>
        )}
      </Box>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  surahName: {
    fontWeight: 'bold',
    fontFamily: 'FiraSans-Bold',
    fontSize: 18,
    marginBottom: 6,
  },
  arabic: {
    fontSize: 28,
    fontWeight: '600',
    color: '#333',
    fontFamily: 'ut',
    textAlign: 'center',
  },
  translation: {
    color: '#333',
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'FiraSans-Regular',
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

export default Detail;
