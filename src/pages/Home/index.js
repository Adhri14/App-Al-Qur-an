/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import {
  ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import Axios from 'axios';
import { IcSearch, IlLighting } from '../../assets';
import { Gap, HeaderTitle } from '../../components/atoms';
import { Surah } from '../../components/molecules';
import { Colors, Fonts } from '../../utils';
import { API_DATE, API_SURAH, location } from '../../config';

const Home = ({ navigation }) => {
  const [date, setDate] = useState('');
  const [surah, setSurah] = useState([]);

  useEffect(() => {
    getData();
    getDate();
  }, []);

  const getData = () => {
    // call API surah
    Axios.get(`${API_SURAH}`)
      .then((res) => {
        setSurah(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDate = () => {
    // Call API Date
    Axios.get('http://api.aladhan.com/v1/hToG')
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => err.data);
  };

  return (
    <View style={styles.page}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderTitle />
        <View style={styles.welcome}>
          <Text style={styles.title}>Assalamualaikum,</Text>
          {/* <Text style={styles.name}>Adhri adly</Text> */}
        </View>
        <Gap height={30} />
        <View style={styles.info}>
          <IlLighting style={styles.illustration} />
          <Text style={styles.date}>Adhri adly</Text>
          <View style={styles.row}>
            <Text style={styles.city}>Waktu anda masuk Jam : </Text>
            <Text style={styles.time}>{location}</Text>
          </View>
        </View>
        <Gap height={30} />
        <View style={styles.row}>
          <Text style={styles.surah}>Surah</Text>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Search')}>
            <IcSearch />
          </TouchableOpacity>
        </View>
        <Gap height={30} />
        <View style={styles.listSurah}>
          {surah.map((surat) => (
            <Surah
              key={surat.nomor}
              arab={surat.asma}
              number={surat.nomor}
              title={surat.nama}
              subtitle={surat.arti}
              onPress={() => navigation.navigate('DetailSurah', surat)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Colors.Other,
  },
  welcome: {
    marginTop: 20,
    marginLeft: 30,
  },
  title: {
    fontFamily: Fonts.Semibold,
    fontSize: 22,
    color: Colors.PrimaryColor,
  },
  name: {
    fontFamily: Fonts.Semibold,
    fontSize: 22,
    color: Colors.TintPrimary,
  },
  info: {
    marginHorizontal: 30,
    position: 'relative',
    backgroundColor: Colors.PrimaryColor,
    borderRadius: 20,
    padding: 20,
    paddingBottom: 6,
    marginTop: -10,
  },
  date: {
    fontFamily: Fonts.Bold,
    fontSize: 20,
    color: Colors.Other,
  },
  illustration: {
    position: 'absolute',
    right: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginTop: 17
  },
  city: {
    fontFamily: Fonts.Medium,
    fontSize: 16,
    color: Colors.Other,
  },
  time: {
    fontFamily: Fonts.Semibold,
    fontSize: 35,
    color: Colors.Other,
    marginRight: 18,
  },
  surah: {
    marginLeft: 30,
    fontFamily: Fonts.Semibold,
    fontSize: 22,
    color: Colors.PrimaryColor,
  },
  btn: {
    marginRight: 30,
  },
});
