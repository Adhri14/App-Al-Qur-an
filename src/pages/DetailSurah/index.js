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
import { useDispatch, useSelector } from 'react-redux';
import { ButtonBack, ListAyat, Skeleton } from '../../components';
import { Colors, Fonts, getData } from '../../utils';
import { API_AYAT } from '../../config';
import { getDataAyat } from '../../redux/action/detail';

const DetailSurah = ({ navigation, route }) => {
  const [loading, setLoading] = useState(false);
  const {
    nama, arti, ayat, nomor,
  } = route.params;

  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.detailReducer);

  useEffect(() => {
    setLoading(true);
    dispatch(getDataAyat(nomor));
  }, []);

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
          {(!loading || data.length === 0) && (
            <Skeleton type="loading-ayat" />
          )}
          {loading && (
            <>
              {data.map((item) => (
                <ListAyat key={item.nomor} number={item.nomor} title={item.id} arab={item.ar} />
              ))}
            </>
          )}
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
