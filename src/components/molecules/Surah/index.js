/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  ImageBackground, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { IcStar } from '../../../assets';
import { Colors, Fonts } from '../../../utils';
import { Gap } from '../../atoms';

const Surah = ({
  number, title, subtitle, arab, onPress,
}) => (
  <TouchableOpacity activeOpacity={0.5} onPress={onPress} style={styles.container}>
    <View style={styles.content}>
      <View style={styles.number}>
        <IcStar />
        <Text style={styles.textNum}>{number}</Text>
      </View>
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <Text style={styles.arab}>{arab}</Text>
      </View>
    </View>
    <Gap height={1} backgroundColor={Colors.TintSecondary} marginTop={20} borderRadius={5} />
  </TouchableOpacity>
);

export default Surah;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginBottom: 20,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  number: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  textNum: {
    fontFamily: Fonts.Medium,
    fontSize: 16,
    color: Colors.PrimaryColor,
    position: 'absolute',
    alignSelf: 'center',
    top: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    marginTop: 5,
  },
  title: {
    fontFamily: Fonts.Medium,
    fontSize: 16,
    color: Colors.TintPrimary,
  },
  subtitle: {
    fontFamily: Fonts.Medium,
    fontSize: 14,
    color: Colors.TintSecondary,
  },
  arab: {
    fontFamily: Fonts.Regular,
    fontSize: 25,
    color: Colors.PrimaryColor,
  },
});
