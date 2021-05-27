/* eslint-disable react/jsx-filename-extension */
import React, { useCallback } from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Fonts, Colors } from '../../../utils';

const ListSocialMedia = ({
  color, label, value, icon, onPress,
}) => (
  <View style={styles.container}>
    <Text style={styles.text}>
      <Icon name={icon} size={16} color={Colors.TintPrimary} />
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
    color: Colors.TintPrimary,
  },
  container: {
    marginLeft: 25,
  },
});
