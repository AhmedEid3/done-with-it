import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import colors from '../config/theme';

export default function AppButton({
  title,
  children,
  onPress,
  style,
  styleText,
  color,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        style,
        { backgroundColor: colors[color] || color || colors.primary },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, styleText]}>{children || title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: colors.primary,
    marginVertical: 10,
    borderRadius: 25,
    justifyContent: 'center',
    shadowColor: colors.grey,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 10,
  },
  text: {
    color: colors.white,
    textAlign: 'center',
  },
});
