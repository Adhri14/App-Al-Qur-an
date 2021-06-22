/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-filename-extension */
// /* eslint-disable no-unused-vars */
// /* eslint-disable linebreak-style */
// /* eslint-disable no-use-before-define */
// /* eslint-disable react/jsx-filename-extension */
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  ScrollView, StatusBar, StyleSheet, Text, View,
} from 'react-native';
import { ButtonBack, ListAyat, Skeleton } from '../../components';
import { useTheme } from '../../components/atoms/Theme';
import { API_AYAT } from '../../config';
import { Colors, Fonts } from '../../utils';

const DetailSurah = ({ navigation, route }) => {
  const [loading, setLoading] = useState(false);
  const {
    nama, arti, ayat, nomor,
  } = route.params;

  const [ayats, setAyat] = useState([]);

  // const dispatch = useDispatch();
  // const { data } = useSelector((state) => state.detailReducer);

  useEffect(() => {
    getAyat();
    // dispatch(getAyat(nomor));
  }, []);

  const getAyat = () => {
    Axios.get(`${API_AYAT(nomor)}`)
      .then((res) => {
        setLoading(true);
        setAyat(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const { theme } = useTheme();

  return (
    <View style={[styles.page]}>
      <StatusBar backgroundColor="transparent" translucent />
      <ScrollView>
        <View style={[styles.row, { backgroundColor: theme.backgroundColorSecond }]}>
          <ButtonBack backgroundColor={theme.backgroundColorInput3} onPress={() => navigation.goBack()} />
          <View>
            <Text style={styles.title}>{nama}</Text>
            <Text style={styles.subtitle}>{`${arti} . ${ayat} Ayat`}</Text>
          </View>
        </View>
        <View style={[styles.body, , { backgroundColor: theme.backgroundColorMain }]}>
          {(!loading || ayats.length === 0) && (
            <Skeleton type="loading-ayat" />
          )}
          {loading && (
            <>
              {ayats.map((item) => (
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
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: -50,
    paddingTop: 30,
    paddingHorizontal: 30,
  },
  row: {
    height: 200,
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
