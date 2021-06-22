/* eslint-disable react/jsx-filename-extension */
import React, { Children, useContext, useState } from 'react';
import {
  StyleSheet, Switch, Text, TouchableOpacity, View,
} from 'react-native';
import { IcEdit } from '../../../assets';
import { Colors, Fonts } from '../../../utils';
import { useTheme } from '../Theme';

const ListSetting = ({
  label, children, saklar, onPress,
}) => {
  const [isState, setIsState] = useState(false);
  const toggleSwitch = () => setIsState((previousState) => !previousState);

  const { theme } = useTheme();

  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.container} onPress={onPress}>
      {children}
      <View style={styles.row}>
        <Text style={[styles.label, { color: theme.textSetting }]}>{label}</Text>
        {saklar && (
        <Switch
          trackColor={{ false: Colors.TintSecondary, true: Colors.BackgroundSecondary }}
          thumbColor={isState ? Colors.PrimaryColor : Colors.Other}
          onValueChange={toggleSwitch}
          value={isState}
        />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ListSetting;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  label: {
    marginLeft: 20,
    fontFamily: Fonts.Regular,
    fontSize: 16,
    marginTop: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
});
