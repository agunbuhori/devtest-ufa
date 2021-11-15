import {Flex} from 'native-base';
import React from 'react';
import {ActivityIndicator, Text} from 'react-native';

const FullProgress = () => (
  <Flex flex={1} justifyContent="center" alignItems="center">
    <ActivityIndicator size="large" color="#cba75a" />
    <Text>Memuat...</Text>
  </Flex>
);

export default FullProgress;
