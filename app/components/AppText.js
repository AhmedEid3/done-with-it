import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

export default function AppText({ style, color, children }) {
  return <Text style={[styles.text, style, { color: color }]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    ...Platform.select({
      ios: {
        fontFamily: 'Avenir',
      },
      android: {
        fontFamily: 'Roboto',
      },
    }),
  },
});
