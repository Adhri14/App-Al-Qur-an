import React, { useEffect, useState } from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IcSearch, IlLighting } from '../../assets'
import { Gap, HeaderTitle } from '../../components/atoms'
import { Surah } from '../../components/molecules'
import {Colors, Fonts} from '../../utils'
import Axios from 'axios';
import {API_DATE, API_SURAH, location} from '../../config';

const Home = ({navigation}) => {
   const [date, setDate] = useState('');
   const [surah, setSurah] = useState([]);

   useEffect(() => {
      getData();
   }, []);

   const getData = () => {
      // call API date arab
      Axios.get(`${API_DATE}`)
      .then(res => {
         setDate(res.data.data.hijri);
      })
      .catch(err => console.log(err));

      // call API surah
      Axios.get(`${API_SURAH}`)
      .then(res => {
         console.log(res.data);
         setSurah(res.data)
      })
      .catch(err => {
         console.log(err);
      })
   };

   return (
      <View style={styles.page}>
         <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content" />
         <ScrollView showsVerticalScrollIndicator={false}>
            <HeaderTitle />
            <View style={styles.welcome}>
               <Text style={styles.title}>Assalamualaikum,</Text>
               <Text style={styles.name}>Adhri adly</Text>
            </View>
            <Gap height={30} />
            <View style={styles.info}>
               <IlLighting style={styles.illustration} />
               <Text style={styles.date}>{`${date.day} ${date.month.en} ${date.year} H`}</Text>
               <View style={styles.row}>
                  <Text style={styles.city}>Subuh Di Palembang : </Text>
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
               {surah.map(surat => (
                  <Surah key={surat.nomor} number={surat.nomor} title={surat.nama} subtitle={surat.arti} arab={surat.asma} />
               ))}
            </View>
         </ScrollView>
      </View>
   )
}

export default Home

const styles = StyleSheet.create({
   page: {
      flex: 1,
      backgroundColor: Colors.Other
   },
   welcome:{
      marginTop: 20,
      marginLeft: 30
   },
   title: {
      fontFamily: Fonts.Medium,
      fontSize: 18,
      color: Colors.SecondaryColor,
   },
   name: {
      fontFamily: Fonts.Semibold,
      fontSize: 22,
      color: Colors.TintPrimary
   },
   info: {
      marginHorizontal: 30,
      position: 'relative',
      backgroundColor: Colors.PrimaryColor,
      borderRadius: 20,
      padding: 20,
      paddingBottom: 6,
   },
   date: {
      fontFamily: Fonts.Medium,
      fontSize: 18,
      color: Colors.Other
   },
   illustration: {
      position: 'absolute',
      right: 20
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
      color: Colors.Other
   },
   time: {
      fontFamily: Fonts.Semibold,
      fontSize: 35,
      color: Colors.Other,
      marginRight: 10
   },
   surah: {
      marginLeft: 30,
      fontFamily: Fonts.Semibold,
      fontSize: 22,
      color: Colors.PrimaryColor
   },
   btn: {
      marginRight: 30
   }
})
