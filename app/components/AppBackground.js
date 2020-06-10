import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

export default function AppBackground({ source, style, children }) {
  return (
    <ImageBackground
      blurRadius={1}
      style={[styles.backgroundImg, style]}
      source={source}
    >
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImg: {
    flex: 1,
  },
});
