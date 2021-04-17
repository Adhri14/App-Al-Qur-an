import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { IcHomeOff, IcHomeOn, IcPlay, IcSettingOff, IcSettingOn } from '../../../assets'
import { Colors, Fonts } from '../../../utils'

const Icon = ({label, isFocused}) => {
   if(label === 'Home') {
      return isFocused ? <IcHomeOn /> : <IcHomeOff />
   }
   if(label === 'Play') {
      return <IcPlay />
   }
   if(label === 'Setting') {
      return isFocused ? <IcSettingOn /> : <IcSettingOff />
   }

   return <IcHomeOn />
}

const Tab = ({onPress, onLongPress, label, isFocused, icon}) => {
   return (
      <TouchableOpacity
         onPress={onPress}
         onLongPress={onLongPress}
         style={styles.tab}
         >
         {icon && <Icon label={label} isFocused={isFocused} />}
         {isFocused && <Text style={styles.label}>{label}</Text>}
      </TouchableOpacity>
   )
}

export default Tab

const styles = StyleSheet.create({
   tab: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 16
   },
   label: {
      fontFamily: Fonts.Medium,
      fontSize: 14,
      color: Colors.PrimaryColor,
      marginTop: 5
   }
})
