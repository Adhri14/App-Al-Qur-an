/* eslint-disable react/jsx-filename-extension */
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Route from './routes';

const App = () => (
  <NavigationContainer>
    <Provider store={store}>
      <Route />
    </Provider>
  </NavigationContainer>
);

export default App;
