/* eslint-disable import/prefer-default-export */
import {TextInput} from 'react-native';
import {Colors} from '../Colors';

export const defaultTheme = {
  textSecondary: Colors.SecondaryColor,
  textPrimary: Colors.TintPrimary,
  textPrimarySurah: Colors.PrimaryColor,
  backgroundColorMain: Colors.Other,
  backgroundColorSecond: '#36DCB4',
  colorSm: '#1AC69D',
  colorM: '#1DCAA1',
  colorLg: '#24D2A9',
  colorXlg: '#2AD9AF',
  backgroundColorInput1: Colors.BackgroundSecondary,
  backgroundColorInput2: '#2EDAB0',
  backgroundColorInput3: '#20D2A7',
  button: Colors.Other,
  textSetting: 'rgba(36, 55, 90, .7)',
  textSetting2: Colors.TintPrimary,
  textAbout: Colors.TintPrimary,
  textAyat: Colors.TintPrimary,
  themeMode: 'default',
};

export const darkTheme = {
  textPrimary: Colors.PrimaryColor,
  textSecondary: Colors.SecondaryColor,
  backgroundColorMain: Colors.TintPrimary,
  backgroundColorSecond: '#009975',
  colorSm: '#13B28D',
  colorM: '#10A380',
  colorLg: '#179879',
  colorXlg: '#1D8E73',
  backgroundColorInput1: '#243350',
  backgroundColorInput2: '#189577',
  backgroundColorInput3: '#0E6F57',
  button: Colors.TintPrimary,
  textSetting: Colors.Other,
  textSetting2: Colors.Other,
  textAbout: Colors.TintSecondary,
  textAyat: Colors.TintSecondary,
  themeMode: 'dark',
};
