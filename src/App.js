import React, { useMemo, useState } from 'react'
import {NavigationContainer, DarkTheme, DefaultTheme} from '@react-navigation/native';
import Route from './routes';
import { useColorScheme } from 'react-native';
import { Provider } from 'react-native-paper';

const App = () => {
  return (
      <NavigationContainer>
        <Route />
      </NavigationContainer>
  )
}

export default App
