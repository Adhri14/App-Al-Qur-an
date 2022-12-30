/* eslint-disable react/jsx-filename-extension */
import React, {createContext, useContext, useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {darkTheme, defaultTheme, getData, storeData} from '../../../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ThemeContext = createContext();

const Theme = ({children}) => {
  const [theme, setTheme] = useState(defaultTheme);
  const [switchTheme, setSwitchTheme] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const findOldTheme = async () => {
    const themeMode = await getData('theme');
    if (themeMode !== null) {
      themeMode === 'default' ? setTheme(defaultTheme) : setTheme(darkTheme);
      // setSwitchTheme(themeMode === 'dark' ? true : false);
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  const updateTheme = currentTheme => {
    const newTheme = currentTheme === 'default' ? defaultTheme : darkTheme;
    // console.log('mode : ', newTheme);
    setTheme(newTheme);
    // setSwitchTheme(newTheme);
    storeData('theme', currentTheme);
  };

  useEffect(() => {
    findOldTheme();
  }, []);

  return (
    <ThemeContext.Provider
      value={{theme, isLoading, updateTheme, switchTheme, setSwitchTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default Theme;
