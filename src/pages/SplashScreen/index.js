import React, { useEffect } from 'react';
import {
  ImageBackground, StatusBar, StyleSheet, Text, View,
} from 'react-native';
import { IlBackground } from '../../assets';
import { Colors, Fonts } from '../../utils';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('PageName');
    }, 3000);
  }, []);

  return (
    <View style={styles.page}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <ImageBackground source={IlBackground} style={styles.background}>
        <Text style={styles.title}>Qur'anKu</Text>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Colors.PrimaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: Fonts.Bold,
    fontSize: 50,
    color: Colors.Other,
  },
});
