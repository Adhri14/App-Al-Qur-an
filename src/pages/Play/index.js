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
    <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
      <IcBackOn />
    </TouchableOpacity>
    {/* <ImageBackground source={IlBackground} style={styles.background}>
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
    </ImageBackground> */}
    <View style={styles.rounded1}>
      <View style={styles.rounded2}>
        <View style={styles.rounded3}>
          <View style={styles.rounded4}>
            <Text style={styles.title}>Mohon Maaf!</Text>
            <Gap height={20} />
            <Text style={styles.subtitle}>Halaman ini masih dalam tahap</Text>
            <Text style={styles.subtitle}>Pengembangan</Text>
          </View>
        </View>
      </View>
    </View>
    <View style={styles.img}>
      <Image source={IlMessage} style={styles.thumb} />
    </View>
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
  rounded1: {
    width: 777,
    height: 777,
    backgroundColor: '#2AD9AF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1000,
  },
  rounded2: {
    width: 639,
    height: 649,
    backgroundColor: '#24D2A9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1000,
  },
  rounded3: {
    width: 479,
    height: 479,
    backgroundColor: '#1DCAA1',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1000,
  },
  rounded4: {
    width: 319,
    height: 319,
    backgroundColor: '#1AC69D',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1000,
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
    zIndex: 999,
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
