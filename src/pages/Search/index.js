/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import Axios from 'axios';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import {
  ScrollView, StatusBar, StyleSheet, Text, TextInput, View,
} from 'react-native';
import { IcSearch } from '../../assets';
import { Skeleton, Surah } from '../../components';
import { ButtonBack, Gap } from '../../components/atoms';
import { useTheme } from '../../components/atoms/Theme';
import { API_SURAH, contains } from '../../config';
import { Colors, Fonts } from '../../utils';

const Search = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [surah, setSurah] = useState([]);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getDataSurah();
  }, []);

  const getDataSurah = () => {
    Axios.get(`${API_SURAH}`)
      .then((res) => {
        setLoading(true);
        setSurah(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  const searchSurah = (itemSurah) => {
    if (itemSurah) {
      const newData = data.filter((item) => {
        const itemData = item.nama ? item.nama.toLowerCase() : ''.toLowerCase();
        const text = itemSurah.toLowerCase();

        return itemData.indexOf(text) > -1;
      });
      setSurah(newData);
      setSearch(itemSurah);
    } else {
      setSurah(data);
      setSearch(itemSurah);
    }
  };

  const { theme } = useTheme();

  return (
    <View style={styles.page}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <ScrollView>
        <View style={styles.header}>
          <ButtonBack onPress={() => navigation.goBack()} icon backgroundColor={theme.backgroundColorInput1} />
          <Text style={styles.title}>Cari Surah</Text>
        </View>
        <Gap height={20} />
        <View style={[styles.input, { backgroundColor: theme.backgroundColorInput1 }]}>
          <TextInput placeholder="Nama Surah" placeholderTextColor={Colors.PrimaryColor} style={styles.txt} value={search} onChangeText={(text) => searchSurah(text)} />
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
    borderRadius: 10,
  },
  txt: {
    fontFamily: Fonts.Medium,
    fontSize: 16,
    color: Colors.PrimaryColor,
    flex: 1,
  },
});
