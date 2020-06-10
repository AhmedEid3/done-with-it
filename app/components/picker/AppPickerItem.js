import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import AppText from '../AppText';

export default function AppPickerItem({ title, style, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <AppText>{title}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
