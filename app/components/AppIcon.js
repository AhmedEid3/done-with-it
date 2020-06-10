import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/theme';

export default function AppIcon({
  iconName,
  size,
  colorIcon,
  backgroundColor,
  style,
}) {
  return (
    <View
      style={[
        styles.container,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: colors[backgroundColor] || backgroundColor,
        },
        style,
      ]}
    >
      <MaterialCommunityIcons
        name={iconName}
        size={size / 2}
        color={colorIcon}
      />
    </View>
  );
}

AppIcon.defaultProps = {
  backgroundColor: 'black',
  colorIcon: 'white',
  size: 50,
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
