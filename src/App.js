/* eslint-disable react/jsx-filename-extension */
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import { Theme } from './components';
import { Home, SplashScreen } from './pages';
import store from './redux/store';
import Route from './routes';

const App = () => (
  <Theme>
    <NavigationContainer>
      <Route />
    </NavigationContainer>
  </Theme>

  // <Theme>
  //   <Home />
  // </Theme>
);

export default App;
