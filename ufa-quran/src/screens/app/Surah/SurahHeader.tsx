import React from 'react';
import {Box, Image} from 'native-base';
import {StyleSheet} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../constants/dimensions';

const SurahHeader = () => {
  return (
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
};

const styles = StyleSheet.create({
  header: {
    height: SCREEN_HEIGHT - 150,
    width: SCREEN_WIDTH,
    backgroundColor: 'rgb(29,45,74)',
    position: 'absolute',
  },
});

export default SurahHeader;
