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
import { Firebase } from '../../config';

const PageName = ({ navigation }) => {
  const [form, setForm] = useForm({
    name: '',
  });

  const onSubmit = () => {
    const biodata = Firebase.database().ref('Biodata');
    setForm('reset');
    const data = {
      name: form.name,
    };
    biodata.push(data);
    storeData('user', data);
    navigation.replace('MainApp');
  };

  return (
    <View style={styles.page}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <ImageBackground source={IlBackground} style={styles.background}>
        <Text style={styles.skip} onPress={onSubmit}>Lewati</Text>
        <View style={styles.content}>
          <Text style={styles.title}>Assalamualaikum,</Text>
          <Text style={styles.subtitle}>Namanya Siapa nih?</Text>
        </View>
        <Gap height={50} />
        <TextInput placeholder="Masukkan Nama" placeholderTextColor={Colors.Other} style={styles.input} value={form.name} onChangeText={(value) => setForm('name', value)} />
        <Gap height={50} />
        <TouchableOpacity style={styles.btn} activeOpacity={0.5} onPress={onSubmit}>
          <Text style={styles.textBtn}>Mulai</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default PageName;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Colors.PrimaryColor,
  },
  background: {
    flex: 1,
    width: '100%',
    position: 'relative',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  skip: {
    top: 50,
    right: 30,
    position: 'absolute',
    fontFamily: Fonts.Medium,
    fontSize: 16,
    color: Colors.Other,
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
