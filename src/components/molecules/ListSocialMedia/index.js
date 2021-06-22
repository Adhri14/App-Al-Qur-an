/* eslint-disable react/jsx-filename-extension */
import React, { useCallback } from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Fonts, Colors } from '../../../utils';
import { useTheme } from '../../atoms/Theme';

const ListSocialMedia = ({
  color, label, value, icon, onPress,
}) => {
  const { theme } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: theme.textAbout }]}>
        <Icon name={icon} size={16} color={theme.textAbout} />
        {' '}
        |
        {' '}
        {label}
        {' '}
        :
        {' '}
        <Text onPress={onPress} style={styles.socialMedia(color)}>{value}</Text>
      </Text>
    </View>
  );
};

export default ListSocialMedia;

const styles = StyleSheet.create({
  socialMedia: (color) => ({
    color,
    fontFamily: Fonts.Regular,
    fontSize: 16,
  }),
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
  container: {
    marginLeft: 25,
  },
});
