import React, { useMemo, useState } from 'react';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { Provider } from 'react-native-paper';
import Route from './routes';

const App = () => (
  <NavigationContainer>
    <Route />
  </NavigationContainer>
);

export default App;
