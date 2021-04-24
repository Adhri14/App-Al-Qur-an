import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { IcBackOff, IcBackOn } from '../../../assets'

const ButtonBack = ({backgroundColor, icon, onPress}) => {
   return (
      <TouchableOpacity style={styles.btn(backgroundColor)} onPress={onPress}>
         {icon ? <IcBackOff /> : <IcBackOn />}
      </TouchableOpacity>
   )
}

export default ButtonBack

const styles = StyleSheet.create({
   btn: (backgroundColor) => ({
      backgroundColor,
      width: 50,
      height: 50,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 20
   })
})
