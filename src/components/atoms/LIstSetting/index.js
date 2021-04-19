import { useTheme } from '@react-navigation/native'
import React, {Children, useContext, useState} from 'react'
import { StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import { IcEdit } from '../../../assets'
import { Colors, Fonts } from '../../../utils'

const ListSetting = ({label, children, saklar, onPress}) => {
   const [isState, setIsState] = useState(false);
   const toggleSwitch = () => setIsState(previousState => !previousState);
   return (
      <View style={styles.container}>
         {children}
         <View style={styles.row}>
            <Text style={styles.label} onPress={onPress}>{label}</Text>
            {saklar && <Switch 
               trackColor={{ false: Colors.TintSecondary, true: Colors.Background }}
               thumbColor={isState ? Colors.PrimaryColor : Colors.Other}
               onValueChange={toggleSwitch}
               value={isState}
               />}
         </View>
      </View>
   )
}

export default ListSetting

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 30
   },
   label: {
      marginLeft: 20,
      fontFamily: Fonts.Regular,
      fontSize: 16,
      color: Colors.TintPrimary,
      marginTop: 5,
      opacity: .7
   },
   row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      flex: 1
   }
})
