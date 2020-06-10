import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function AppLayout({ children, style }) {
  return <View style={[styles.layout, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  layout: {
    height: '100%',
    padding: 10,
  },
});
