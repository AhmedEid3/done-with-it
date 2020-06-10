import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/theme';

export default function AppViewImage({ source }) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons style={styles.closeIcon} name="close" />

      <MaterialCommunityIcons
        style={styles.deleteIcon}
        name="trash-can-outline"
      />

      <Image style={styles.image} source={source} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  image: { resizeMode: 'contain', height: '100%', width: '100%' },
  closeIcon: {
    fontSize: 30,
    position: 'absolute',
    top: 50,
    left: 30,
    color: colors.white,
  },
  deleteIcon: {
    fontSize: 30,
    position: 'absolute',
    top: 50,
    right: 30,
    color: colors.primary,
  },
});
