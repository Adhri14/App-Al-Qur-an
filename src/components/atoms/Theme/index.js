/* eslint-disable react/jsx-filename-extension */
import React, { createContext, useContext, useState } from 'react';
import { View, Text } from 'react-native';
import { darkTheme, defaultTheme } from '../../../utils';

const ThemeContext = createContext();

const Theme = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);
  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default Theme;
