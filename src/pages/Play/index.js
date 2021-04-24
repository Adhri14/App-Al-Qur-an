import React, { useEffect } from 'react';
import {
  Image, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { IcBackOn, IlBackground, IlMessage } from '../../assets';
import { Gap } from '../../components/atoms';
import { Colors, Fonts } from '../../utils';

const Play = ({ navigation }) => (
  <View style={styles.page}>
    <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
    <ImageBackground source={IlBackground} style={styles.background}>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
        <IcBackOn />
      </TouchableOpacity>
      <Text style={styles.title}>Mohon Maaf!</Text>
      <Gap height={20} />
      <Text style={styles.subtitle}>Halaman ini masih dalam tahap</Text>
      <Text style={styles.subtitle}>Pengembangan</Text>
      <View style={styles.img}>
        <Image source={IlMessage} style={styles.thumb} />
      </View>
    </ImageBackground>
  </View>
);

export default Play;

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
    fontFamily: Fonts.Semibold,
    fontSize: 26,
    color: Colors.Other,
  },
  subtitle: {
    fontFamily: Fonts.Regular,
    fontSize: 16,
    color: Colors.Other,
  },
  btn: {
    backgroundColor: '#20D2A7',
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    position: 'absolute',
    top: 50,
    left: 30,
  },
  img: {
    width: 385,
    height: 385,
    resizeMode: 'cover',
    position: 'absolute',
    bottom: 0,
  },
  thumb: {
    width: undefined,
    height: undefined,
    flex: 1,
  },
});
