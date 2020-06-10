import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

import colors from '../config/theme';

export default function AppCard({ title, subtitle, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: colors.white,
    marginBottom: 15,
  },
  img: {
    width: '100%',
    height: 250,
  },
  textContainer: {
    padding: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'capitalize',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.secondary,
  },
});
