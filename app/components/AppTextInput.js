import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/theme';

export default function AppTextInput({ iconName, ...othePprops }) {
  return (
    <View style={styles.container}>
      {iconName && (
        <MaterialCommunityIcons
          style={styles.icon}
          size={25}
          color={colors.medium}
          name={iconName}
        />
      )}
      <TextInput style={styles.input} {...othePprops} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: colors.orangeLight,
    marginVertical: 10,
  },
  input: {
    paddingHorizontal: 15,
    height: 50,
    flexGrow: 1,
    color: colors.dark,
    fontSize: 18,
  },
  icon: { marginLeft: 15 },
});
