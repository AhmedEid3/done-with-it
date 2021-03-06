import React from 'react';
import { View, StyleSheet } from 'react-native';

import colors from '../../config/theme';

export default function AppListItemSeperator() {
  return <View style={styles.seperator} />;
}

const styles = StyleSheet.create({
  seperator: {
    width: '100%',
    height: 1,
    backgroundColor: colors.light,
  },
});
