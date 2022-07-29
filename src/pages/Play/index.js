import React, {useEffect} from 'react';
import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IcBackOn, IlBackground, IlMessage} from '../../assets';
import {Gap} from '../../components/atoms';
import {useTheme} from '../../components/atoms/Theme';
import ThemeWrapper from '../../components/molecules/ThemeWrapper';
import {Colors, Fonts} from '../../utils';

const Play = ({navigation}) => {
  const {theme} = useTheme();
  return (
    <ThemeWrapper>
      <View
        style={[styles.page, {backgroundColor: theme.backgroundColorSecond}]}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <TouchableOpacity
          style={[styles.btn, {backgroundColor: theme.backgroundColorInput3}]}
          onPress={() => navigation.goBack()}>
          <IcBackOn />
        </TouchableOpacity>
        <View style={[styles.rounded1, {backgroundColor: theme.colorXlg}]}>
          <View style={[styles.rounded2, {backgroundColor: theme.colorLg}]}>
            <View style={[styles.rounded3, {backgroundColor: theme.colorM}]}>
              <View style={[styles.rounded4, {backgroundColor: theme.colorSm}]}>
                <Text style={styles.title}>Mohon Maaf!</Text>
                <Gap height={20} />
                <Text style={styles.subtitle}>
                  Halaman ini masih dalam tahap
                </Text>
                <Text style={styles.subtitle}>Pengembangan</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.img}>
          <Image source={IlMessage} style={styles.thumb} />
        </View>
      </View>
    </ThemeWrapper>
  );
};

export default Play;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
