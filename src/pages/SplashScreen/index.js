/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import {
  Dimensions,
  ImageBackground, StatusBar, StyleSheet, Text, View,
} from 'react-native';
import { IlBackground } from '../../assets';
import { useTheme } from '../../components/atoms/Theme';
import { FirebaseApp } from '../../config';
import { Colors, Fonts } from '../../utils';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const unsubs = FirebaseApp.database().ref('biodata/').once('value').then((res) => {
      setTimeout(() => {
        if (!res) {
          navigation.replace('PageName');
        } else {
          navigation.replace('MainApp');
        }
      }, 3000);
    });

    return () => unsubs();
  }, [navigation]);

  const { theme } = useTheme();
  return (
    <View style={[styles.page, { backgroundColor: theme.backgroundColorSecond }]}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <View style={[styles.rounded1, { backgroundColor: theme.colorXlg }]}>
        <View style={[styles.rounded2, { backgroundColor: theme.colorLg }]}>
          <View style={[styles.rounded3, { backgroundColor: theme.colorM }]}>
            <View style={[styles.rounded4, { backgroundColor: theme.colorSm }]}>
              <Text style={styles.title}>Qur'anKu</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // background: {
  //   flex: 1,
  //   width: '100%',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  title: {
    fontFamily: Fonts.Bold,
    fontSize: 50,
    color: Colors.Other,
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
});

// const { width, height } = Dimensions.get('screen');
