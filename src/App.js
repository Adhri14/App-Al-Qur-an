/* eslint-disable react/jsx-filename-extension */
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useEffect} from 'react';
import {Provider} from 'react-redux';
import {Theme} from './components';
import {Home, SplashScreen} from './pages';
import store from './redux/store';
import Route from './routes';
import {storeData} from './utils';

const App = () => {
  return (
    <Theme>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </Theme>

    // <Theme>
    //   <Home />
    // </Theme>
  );
};

export default App;
