/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import {
  ImageBackground, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import { IlBackground } from '../../assets';
import { Gap } from '../../components/atoms';
import {
  Colors, Fonts, storeData, useForm,
} from '../../utils';
import { FirebaseApp } from '../../config';
import { useTheme } from '../../components/atoms/Theme';

const PageName = ({ navigation }) => {
  const [form, setForm] = useForm({
    name: '',
  });

  const onSubmit = () => {
    const biodata = FirebaseApp.database().ref('biodata');
    setForm('reset');
    const data = {
      name: form.name,
    };
    biodata.push(data);
    storeData('user', data);
    navigation.replace('MainApp');
  };

  const { theme } = useTheme();

  return (
    <View style={[styles.page, { backgroundColor: theme.backgroundColorSecond }]}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <Text style={styles.skip} onPress={onSubmit}>Lewati</Text>
      <View style={[styles.rounded1, { backgroundColor: theme.colorXlg }]}>
        <View style={[styles.rounded2, { backgroundColor: theme.colorLg }]}>
          <View style={[styles.rounded3, { backgroundColor: theme.colorM }]}>
            <View style={[styles.rounded4, { backgroundColor: theme.colorSm }]} />
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Assalamualaikum,</Text>
          <Text style={styles.subtitle}>Namanya Siapa nih?</Text>
        </View>
        <Gap height={50} />
        <TextInput placeholder="Masukkan Nama" placeholderTextColor={Colors.Other} style={[styles.input, { backgroundColor: theme.backgroundColorInput2 }]} value={form.name} onChangeText={(value) => setForm('name', value)} />
        <Gap height={50} />
        <TouchableOpacity style={[styles.btn, theme.button]} activeOpacity={0.5} onPress={onSubmit}>
          <Text style={styles.textBtn}>Mulai</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PageName;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  rounded1: {
    width: 777,
    height: 777,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1000,
  },
  rounded2: {
    width: 639,
    height: 649,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1000,
  },
  rounded3: {
    width: 479,
    height: 479,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1000,
  },
  rounded4: {
    width: 319,
    height: 319,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1000,
  },
  skip: {
    top: 50,
    right: 30,
    position: 'absolute',
    fontFamily: Fonts.Medium,
    fontSize: 16,
    color: Colors.Other,
    zIndex: 1,
  },
  container: {
    position: 'absolute',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    // borderWidth: 1,
    width: '100%',
  },
  title: {
    fontFamily: Fonts.Medium,
    fontSize: 18,
    color: Colors.Other,
  },
  subtitle: {
    fontFamily: Fonts.Semibold,
    fontSize: 26,
    color: Colors.Other,
  },
  content: {
    marginLeft: 30,
  },
  input: {
    height: 80,
    borderRadius: 15,
    backgroundColor: '#2EDAB0',
    marginHorizontal: 30,
    paddingHorizontal: 28,
    fontSize: 16,
    color: Colors.Other,
    fontFamily: Fonts.Semibold,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    borderRadius: 15,
    backgroundColor: Colors.Other,
    marginHorizontal: 30,
    paddingHorizontal: 28,
  },
  textBtn: {
    fontFamily: Fonts.Semibold,
    fontSize: 22,
    color: Colors.PrimaryColor,
  },
});
