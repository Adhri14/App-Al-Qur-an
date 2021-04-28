/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import {
  ScrollView, StatusBar, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { IcBackOff, IcBackOn, IcSearch } from '../../assets';
import { Skeleton, Surah } from '../../components';
import { ButtonBack, Gap } from '../../components/atoms';
import { Colors, Fonts } from '../../utils';
import { API_SURAH } from '../../config';
import { getDataSurah } from '../../redux/action';

const Search = ({ navigation, route }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { surah } = useSelector((state) => state.homeReducer);
  useEffect(() => {
    setLoading(true);
    dispatch(getDataSurah());
  });

  return (
    <View style={styles.page}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <ScrollView>
        <View style={styles.header}>
          <ButtonBack onPress={() => navigation.goBack()} icon backgroundColor={Colors.BackgroundSecondary} />
          <Text style={styles.title}>Cari Surah</Text>
        </View>
        <Gap height={20} />
        <View style={styles.input}>
          <TextInput placeholder="Nama Surah" placeholderTextColor={Colors.PrimaryColor} style={styles.txt} />
          <IcSearch />
        </View>
        <Gap height={30} />
        <View style={styles.listSurah}>
          {(!loading || surah.length === 0) && (
            <Skeleton type="loading-surah" />
          )}
          {loading && (
            <>
              {surah.map((item) => (
                <Surah key={item.nomor} number={item.nomor} title={item.nama} subtitle={item.arti} arab={item.asma} onPress={() => navigation.navigate('DetailSurah', item)} />
              ))}
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Colors.Other,
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
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 30,
    paddingHorizontal: 20,
    backgroundColor: Colors.BackgroundSecondary,
    borderRadius: 10,
  },
  txt: {
    fontFamily: Fonts.Medium,
    fontSize: 16,
    color: Colors.PrimaryColor,
    flex: 1,
  },
});
