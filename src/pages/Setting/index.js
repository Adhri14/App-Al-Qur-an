import { useTheme } from '@react-navigation/native';
import React, { useContext } from 'react';
import {
  StatusBar, StyleSheet, Text, View,
} from 'react-native';
import {
  IcEdit, IcInfo, IcMessage, IcMonth, IcRate,
} from '../../assets';
import { Gap, HeaderTitle, ListSetting } from '../../components';
import { Colors, Fonts } from '../../utils';

const Setting = () => (
  <View style={styles.page}>
    <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
    <HeaderTitle />
    <Gap height={50} />
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Pengguna</Text>
        <ListSetting label="Ganti Nama">
          <IcEdit />
        </ListSetting>
        <Gap height={20} />
      </View>
      <Gap height={50} />
      <View style={styles.content}>
        <Text style={styles.title}>Aplikasi</Text>
        <ListSetting label="Saran dan Masukkan">
          <IcMessage />
        </ListSetting>
        <Gap height={20} />
        <View style={styles.line} />
        <ListSetting label="Tentang">
          <IcInfo />
        </ListSetting>
        <Gap height={20} />
        <View style={styles.line} />
        <ListSetting label="Beri Rating">
          <IcRate />
        </ListSetting>
        <Gap height={20} />
      </View>
      <Gap height={50} />
      <View style={styles.content}>
        <Text style={styles.title}>Tema</Text>
        <ListSetting label="Dark Mode" saklar>
          <IcMonth />
        </ListSetting>
        <Gap height={20} />
      </View>
    </View>
  </View>
);

export default Setting;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Colors.Other,
  },
  container: {
    marginHorizontal: 30,
  },
  title: {
    fontFamily: Fonts.Semibold,
    fontSize: 18,
    color: Colors.TintPrimary,
  },
  line: {
    height: 1,
    backgroundColor: Colors.TintSecondary,
  },
});
