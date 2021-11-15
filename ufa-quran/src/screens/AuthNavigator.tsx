import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import Surah from './app/Surah/Surah';
import Read from './app/Read/Read';
import {SurahData} from './app/Surah/SurahProps';
import {Ayah} from './app/Read/ReadProps';
import Detail from './app/Detail/Detail';

export type RootStackParamList = {
  Surah: undefined;
  Read: SurahData;
  Detail: Ayah & SurahData;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const withoutHeader: NativeStackNavigationOptions = {
  headerShown: false,
};
const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Surah">
      <Stack.Screen name="Surah" component={Surah} options={withoutHeader} />
      <Stack.Screen name="Read" component={Read} options={withoutHeader} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
