import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {extendTheme, NativeBaseProvider} from 'native-base';

import {store, persistor} from './src/redux';
import AuthNavigator from './src/screens/AuthNavigator';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = extendTheme({
    config: {
      initialColorMode: isDarkMode ? 'dark' : 'light',
    },
  });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider theme={theme}>
          <NavigationContainer>
            <SafeAreaView style={{flex: 1}}>
              <AuthNavigator />
            </SafeAreaView>
          </NavigationContainer>
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
