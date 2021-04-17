import React, { useState } from 'react'
import { ScrollView, StatusBar, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native'
import {IcBackOff, IcBackOn, IcSearch} from '../../assets'
import {Surah} from '../../components'
import { Gap } from '../../components/atoms'
import { Colors, Fonts } from '../../utils'

const Search = ({navigation}) => {
   const [isEnabled, setIsEnabled] = useState(false);
   const toggleSwitch = () => setIsEnabled(previousState => !previousState);
   return (
      <View style={styles.page}>
         <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content" />
         <ScrollView>
            <View style={styles.header}>
               <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
                  <IcBackOff />
               </TouchableOpacity>
               <Text style={styles.title}>Cari Surah</Text>
            </View>
            <Gap height={20} />
            <View style={styles.input}>
               <TextInput placeholder="Nama Surah" placeholderTextColor={Colors.PrimaryColor} style={styles.txt} />
               <IcSearch />
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

export default Search

const styles = StyleSheet.create({
   page: {
      flex: 1,
      backgroundColor: Colors.Other
   },
   header: {
      marginTop: 50,
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 30
   },
   btn: {
      backgroundColor: Colors.Background,
      width: 50,
      height: 50,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 20
   },
   title: {
      fontFamily: Fonts.Semibold,
      fontSize: 22,
      color: Colors.PrimaryColor
   },
   input: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 30,
      paddingHorizontal: 20,
      backgroundColor: Colors.Background,
      borderRadius: 10,
   },
   txt: {
      fontFamily: Fonts.Medium,
      fontSize: 16,
      color: Colors.PrimaryColor,
      flex: 1
   }
})
