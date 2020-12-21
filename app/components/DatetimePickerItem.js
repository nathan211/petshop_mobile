import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../config/colors';
import Text from "./Text";

function DatetimePickerItem({ onPress, title }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text customStyle={styles.label}>{title}</Text>
      <Icon style={styles.icon} color={colors.medium} name='calendar' size={30} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  label: {
    marginTop: 5,
    flex: 1,
    color: colors.black
  },
  icon: {
    width: 30,
  }
});

export default DatetimePickerItem;

