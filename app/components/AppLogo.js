import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

export default function AppLogo({ slogan, style }) {
  return (
    <View style={[styles.container, style]}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      {slogan && <Text style={styles.text}>{slogan}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 50,
  },
  logo: {
    width: 90,
    height: 90,
  },
  text: {
    marginTop: 5,
    fontSize: 25,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
});
