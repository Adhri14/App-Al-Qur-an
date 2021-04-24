/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-filename-extension */
// /* eslint-disable no-unused-vars */
// /* eslint-disable linebreak-style */
// /* eslint-disable no-use-before-define */
// /* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import {
  StatusBar, StyleSheet, Text, View, ScrollView,
} from 'react-native';
import Axios from 'axios';
import { ButtonBack, ListAyat } from '../../components';
import { Colors, Fonts } from '../../utils';

const DetailSurah = ({ navigation, route }) => {
  const [data, setData] = useState([]);
  const { nama, arti, ayat } = route.params;
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    Axios.get('https://api.npoint.io/99c279bb173a6e28359c/surat/1')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err.data));
  };

  return (
    <View style={styles.page}>
      <StatusBar backgroundColor="transparent" translucent />
      <ScrollView>
        <View style={styles.row}>
          <ButtonBack backgroundColor={Colors.BackgroundPrimary} onPress={() => navigation.goBack()} />
          <View>
            <Text style={styles.title}>{nama}</Text>
            <Text style={styles.subtitle}>{`${arti} . ${ayat} Ayat`}</Text>
          </View>
        </View>
        <View style={styles.body}>
          {data.map((ayat) => (
            <ListAyat key={ayat.nomor} number={ayat.nomor} title={ayat.id} arab={ayat.ar} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailSurah;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  body: {
    flex: 1,
    backgroundColor: Colors.Other,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: -50,
    paddingTop: 30,
    paddingHorizontal: 30,
  },
  row: {
    height: 200,
    backgroundColor: Colors.PrimaryColor,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 30,
    marginTop: -10,
  },
  title: {
    fontFamily: Fonts.Semibold,
    fontSize: 22,
    color: Colors.Other,
    textAlign: 'right',
  },
  subtitle: {
    fontFamily: Fonts.Medium,
    fontSize: 16,
    color: Colors.Other,
    textAlign: 'right',
  },
  arti: {
    marginLeft: 70,
  },
});
