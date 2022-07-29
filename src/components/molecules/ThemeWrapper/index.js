import React from 'react';
import {View} from 'react-native';
import {useTheme} from '../../atoms/Theme';

export default function ThemeWrapper({children}) {
  const {isLoading} = useTheme();
  if (isLoading) return null;
  return <View style={{flex: 1}}>{children}</View>;
}
