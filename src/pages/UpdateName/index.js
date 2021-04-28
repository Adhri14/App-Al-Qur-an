/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ButtonBack } from '../../components';
import { Colors, Fonts } from '../../utils';

const UpdateName = ({ navigation }) => (
  <View style={styles.header}>
    <ButtonBack onPress={() => navigation.goBack()} icon backgroundColor={Colors.BackgroundSecondary} />
    <Text style={styles.title}>Cari Surah</Text>
  </View>
);

export default UpdateName;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Colors.Other,
  },
  header: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 30,
  },
  title: {
    fontFamily: Fonts.Semibold,
    fontSize: 22,
    color: Colors.PrimaryColor,
  },
});
