import React from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IcSearch, IlLighting } from '../../assets'
import { Gap } from '../../components/atoms'
import { Surah } from '../../components/molecules'
import {Colors, Fonts} from '../../utils'

const Home = ({navigation}) => {
   return (
      <View style={styles.page}>
         <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content" />
         <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.titleApp}>Qur'anKu</Text>
            <View style={styles.welcome}>
               <Text style={styles.title}>Assalamualaikum,</Text>
               <Text style={styles.name}>Adhri adly</Text>
            </View>
            <Gap height={30} />
            <View style={styles.info}>
               <IlLighting style={styles.illustration} />
               <Text style={styles.date}>5 Ramadhan 1442 H</Text>
               <View style={styles.row}>
                  <Text style={styles.city}>Subuh Di Palembang : </Text>
                  <Text style={styles.time}>04:43</Text>
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
               <Surah number={1} title="Al-Fatihah" subtitle="Pembukaan" arab="Al Fatihah" />
               <Surah number={2} title="Al-Baqarah" subtitle="Sapi Betina" arab="Al Baqarah" />
               <Surah number={3} title="Ali Imron" subtitle="Keluarga Imron" arab="Ali Imron" />
               <Surah number={4} title="An-Nisaa" subtitle="Wanita" arab="An Nisaa" />
               <Surah number={5} title="Al-Ma’idah" subtitle="Hidangan" arab="Al Ma’idah" />
               <Surah number={6} title="Al-An’am" subtitle="Binatang Ternak" arab="Al An’am" />
               <Surah number={7} title="Al-A’raf" subtitle="Tempat Tertinggi" arab="Al A’raf" />
               <Surah number={8} title="Al-Anfal" subtitle="Harta Rampasan Perang" arab="Al Anfal" />
               <Surah number={9} title="At-Taubah" subtitle="Pengampunan" arab="At Taubah" />
               <Surah number={10} title="Yunus" subtitle="Yunus" arab="Yunus" />
               <Surah number={11} title="Hud" subtitle="Hud" arab="Hud" />
               <Surah number={12} title="Yusuf" subtitle="Yusuf" arab="Yusuf" />
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
   titleApp: {
      textAlign: 'center',
      marginTop: 60,
      fontFamily: Fonts.Bold,
      fontSize: 26,
      color: Colors.PrimaryColor
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
