/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import moment from 'moment';
import React from 'react';
import {
  Image,
  Linking,
  StatusBar, StyleSheet, Text, View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Logo } from '../../assets';
import { ButtonBack, Gap, ListSocialMedia } from '../../components';
import { useTheme } from '../../components/atoms/Theme';
import { Colors, Fonts } from '../../utils';

const About = ({ navigation }) => {
  const { theme } = useTheme();

  return (
    <View style={[styles.page, { backgroundColor: theme.backgroundColorMain }]}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <View style={styles.header}>
        <ButtonBack onPress={() => navigation.goBack()} icon backgroundColor={theme.backgroundColorInput1} />
        <Text style={styles.title}>Tentang Kami</Text>
      </View>
      <View style={styles.container}>
        <View style={{ alignItems: 'center' }}>
          <Image source={Logo} />
          <Text style={[styles.title, { textAlign: 'center', marginTop: 15, fontSize: 28 }]}>Qur'anKu</Text>
        </View>
        <Text style={[styles.subtitle, { color: theme.textAbout }]}>Kontak Developer : </Text>
        <View style={styles.content}>
          <Text style={styles.job}>1. Adhri (Programmer Front End Developer)</Text>
          <Gap height={7} />
          <ListSocialMedia onPress={() => Linking.openURL('mailto:adhri.adly@gmailcom')} icon="google" label="Email" value="adhri.adly@gmail.com" color={Colors.BackgroundPrimary} />
          <ListSocialMedia onPress={() => Linking.openURL('https://www.instagram.com/daemon.adr/')} icon="instagram" label="Instagram" value="@daemon_adr" color={Colors.BackgroundPrimary} />
          <ListSocialMedia onPress={() => Linking.openURL('https://github.com/adhri14')} icon="github" label="Github" value="github.com/Adhri14" color={Colors.BackgroundPrimary} />
        </View>
        <Gap height={20} />
        <View style={styles.content}>
          <Text style={styles.job}>2. Agus Rukanda (UI/UX & Programmer)</Text>
          <Gap height={7} />
          <ListSocialMedia onPress={() => Linking.openURL('mailto:agusrukanda64@gmail.com')} icon="google" label="Email" value="agusrukanda64@gmail.com" color={Colors.BackgroundPrimary} />
          <ListSocialMedia onPress={() => Linking.openURL('https://www.instagram.com/agusbeee/')} icon="instagram" label="Instagram" value="@agusbeee" color={Colors.BackgroundPrimary} />
          <ListSocialMedia onPress={() => Linking.openURL('https://dribbble.com/agusbee')} icon="dribbble" label="Dribble" value="dribble.com/agusbee" color={Colors.BackgroundPrimary} />
        </View>
      </View>
      <View style={[styles.footer]}>
        <Text style={[styles.textFooter, { marginRight: 2 }]}>
          Copyright
        </Text>
        <Icon name="copyright" size={14} color={Colors.TintPrimary} style={styles.icon} />
        <Text style={[styles.textFooter, { marginLeft: 2 }]}>
          Qur'anKu
          {' '}
          {moment(new Date()).format('y')}
        </Text>
      </View>
    </View>
  );
};
export default About;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  header: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 30,
  },
  title: {
    fontFamily: Fonts.Semibold,
    fontSize: 22,
    color: Colors.PrimaryColor,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 22,
    fontFamily: Fonts.Regular,
    alignSelf: 'flex-start',
    marginLeft: 30,
    marginTop: 50,
    marginBottom: 18,
  },
  job: {
    fontFamily: Fonts.Regular,
    fontSize: 18,
    color: Colors.BackgroundPrimary,
  },
  content: {
    alignSelf: 'flex-start',
    marginHorizontal: 30,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 20,
    color: Colors.TintSecondary,
  },
  textFooter: {
    fontSize: 14,
    fontFamily: Fonts.Regular,
    color: Colors.TintPrimary,
    opacity: 0.7,
  },
  icon: {
    opacity: 0.7,
  },
});
