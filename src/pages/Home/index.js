/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import {
  ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { IcSearch, IlLighting } from '../../assets';
import { Gap, HeaderTitle } from '../../components/atoms';
import { Skeleton, Surah } from '../../components/molecules';
import { location } from '../../config';
import { getDataSurah } from '../../redux/action';
import { Colors, Fonts, getData } from '../../utils';

const Home = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { surah } = useSelector((state) => state.homeReducer);
  const [dataDb, setDataDb] = useState({
    name: '',
  });
  useEffect(() => {
    setLoading(true);
    getData('user').then((res) => {
      setDataDb(res);
    });
    dispatch(getDataSurah());
  });

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
          <Text style={styles.date}>
            {dataDb.name ? dataDb.name : 'Unknown'}
          </Text>
          <View style={styles.row}>
            <Text style={styles.city}>Waktu anda masuk Jam : </Text>
            <Text style={styles.time}>{location}</Text>
          </View>
        </View>
        <Gap height={30} />
        <View style={styles.row}>
          <Text style={styles.surah}>Surah</Text>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Search', { surah })}>
            <IcSearch />
          </TouchableOpacity>
        </View>
        <Gap height={30} />
        <View style={styles.listSurah}>
          {(!loading || surah.length === 0) && (
            <Skeleton type="loading-surah" />
          )}
          {loading && (
            <>
              {surah.map((item) => (
                <Surah
                  key={item.nomor}
                  number={item.nomor}
                  title={item.nama}
                  subtitle={item.arti}
                  arab={item.asma}
                  onPress={() => navigation.navigate('DetailSurah', item)}
                />
              ))}
            </>
          )}

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
    marginRight: 10,
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
  listSurah: {
    flex: 1,
  },
});
