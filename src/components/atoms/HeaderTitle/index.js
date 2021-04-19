import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors, Fonts } from '../../../utils'

const HeaderTitle = () => {
   return (
      <View>
         <Text style={styles.titleApp}>Qur'anKu</Text>
      </View>
   )
}

export default HeaderTitle

const styles = StyleSheet.create({
   titleApp: {
      textAlign: 'center',
      marginTop: 60,
      fontFamily: Fonts.Bold,
      fontSize: 26,
      color: Colors.PrimaryColor
   },
})
