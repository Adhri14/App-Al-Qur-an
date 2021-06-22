/* eslint-disable react/jsx-filename-extension */
import React, { useContext } from 'react';
import {
  StatusBar, StyleSheet, Switch, Text, View,
} from 'react-native';
import {
  IcEdit, IcInfo, IcMessage, IcMonth, IcRate,
} from '../../assets';
import { Gap, HeaderTitle, ListSetting } from '../../components';
import { useTheme } from '../../components/atoms/Theme';
import { Colors, Fonts } from '../../utils';

const Setting = ({ navigation }) => {
  const { theme } = useTheme();
  return (
    <View style={[styles.page, { backgroundColor: theme.backgroundColorMain }]}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <HeaderTitle />
      <Gap height={50} />
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={[styles.title, { color: theme.textSetting2 }]}>Pengguna</Text>
          <ListSetting label="Ganti Nama" onPress={() => navigation.navigate('UpdateName')}>
            <IcEdit style={{ color: theme.textSetting }} color={theme.textSetting} />
          </ListSetting>
          <Gap height={20} />
          <View style={styles.line} />
        </View>
        <Gap height={50} />
        <View style={styles.content}>
          <Text style={[styles.title, { color: theme.textSetting2 }]}>Aplikasi</Text>
          <ListSetting label="Saran dan Masukkan">
            <IcMessage color={theme.textSetting} />
          </ListSetting>
          <Gap height={20} />
          <View style={styles.line} />
          <ListSetting label="Beri Rating">
            <IcRate color={theme.textSetting} />
          </ListSetting>
          <Gap height={20} />
          <View style={styles.line} />
          <ListSetting label="Tentang" onPress={() => navigation.navigate('About')}>
            <IcInfo color={theme.textSetting} />
          </ListSetting>
          <Gap height={20} />
          <View style={styles.line} />
        </View>
        <Gap height={50} />
        {/* <View style={styles.content}>
          <Text style={[styles.title, { color: theme.textSetting2 }]}>Tema</Text>
          <View style={styles.row}>
            <ListSetting label="Dark Mode" saklar>
              <IcMonth color={theme.textSetting} />
            </ListSetting>
          </View>
          <Gap height={20} />
          <View style={styles.line} />
        </View> */}
        <View>
          <IcMonth width={30} height={30} fill="blue" />
        </View>
      </View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    marginHorizontal: 30,
  },
  title: {
    fontFamily: Fonts.Semibold,
    fontSize: 18,
  },
  line: {
    height: 1,
    backgroundColor: Colors.TintSecondary,
  },
});
