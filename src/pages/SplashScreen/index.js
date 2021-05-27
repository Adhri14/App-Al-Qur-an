import React, { useEffect } from 'react';
import {
  Dimensions,
  ImageBackground, StatusBar, StyleSheet, Text, View,
} from 'react-native';
import { IlBackground } from '../../assets';
import { Firebase } from '../../config';
import { Colors, Fonts } from '../../utils';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const unsubs = Firebase.database().ref('Biodata/').once('value').then((res) => {
      setTimeout(() => {
        if (res) {
          navigation.replace('MainApp');
        } else {
          navigation.replace('PageName');
        }
      }, 3000);

      clearTimeout(res);
    });
    return () => unsubs();
    // setTimeout(() => {
    //   navigation.replace('MainApp');
    // }, 3000);
  }, []);

  return (
    <View style={styles.page}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      {/* <ImageBackground source={IlBackground} style={styles.background}>
        <Text style={styles.title}>Qur'anKu</Text>
      </ImageBackground> */}
      <View style={styles.rounded1}>
        <View style={styles.rounded2}>
          <View style={styles.rounded3}>
            <View style={styles.rounded4}>
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
    backgroundColor: Colors.PrimaryColor,
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
});

// const { width, height } = Dimensions.get('screen');
