/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import {
  StyleSheet, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import { ButtonBack, Gap } from '../../components';
import { Firebase } from '../../config';
import {
  Colors, Fonts, getData, storeData, useForm,
} from '../../utils';

const UpdateName = ({ navigation }) => {
  const [dataUser, setDataUser] = useState({
    name: '',
  });

  const [form, setForm] = useForm({
    name: '',
  });

  useEffect(() => {
    getData('user').then((res) => {
      setDataUser(res);
    });

    Firebase.database()
      .ref(`Biodata/${dataUser.name}`)
      .once('value', (res) => {
        const data = res.val() ? res.val() : {};
        const item = { ...data };

        setForm({
          name: item.name,
        });
      });
  }, []);

  const onSubmit = () => {
    const biodata = Firebase.database().ref(`Biodata/${dataUser.name}`);
    setForm('reset');
    const data = {
      name: form.name,
    };
    biodata.update(data);
    storeData('user', data);
    navigation.replace('MainApp');
  };

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <ButtonBack onPress={() => navigation.goBack()} icon backgroundColor={Colors.BackgroundSecondary} />
        <Text style={styles.title}>Ganti Nama</Text>
      </View>
      <View style={styles.row}>
        <TextInput placeholder="Masukkan Nama" value={form.name} onChangeText={(text) => setForm('name', text)} style={styles.input} placeholderTextColor={Colors.Other} />
        <Gap width={10} />
        <TouchableOpacity onPress={onSubmit} style={styles.btn}>
          <Text style={styles.textBtn}>simpan</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>Kotak input tidak boleh kosong*</Text>
    </View>
  );
};

export default UpdateName;

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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 30,
    marginTop: 30,
  },
  input: {
    backgroundColor: Colors.PrimaryColor,
    flex: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    color: Colors.Other,
    fontFamily: Fonts.Medium,
    fontSize: 16,
    paddingVertical: 15,
  },
  btn: {
    backgroundColor: Colors.PrimaryColor,
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderRadius: 10,
  },
  textBtn: {
    color: Colors.Other,
    fontFamily: Fonts.Medium,
    fontSize: 16,
  },
  text: {
    fontFamily: Fonts.Regular,
    fontSize: 12,
    color: 'salmon',
    fontStyle: 'italic',
    marginLeft: 30,
    marginTop: 4,
  },
});
