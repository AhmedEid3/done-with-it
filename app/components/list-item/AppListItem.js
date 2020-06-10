import React from 'react';
import {
  Image,
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../../config/theme';

export default function AppListItem({
  title,
  subtitle,
  image,
  iconComponent,
  onPress,
  renderRightActions,
  style,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress}>
        <View style={[styles.container, style]}>
          {image && <Image style={styles.img} source={image} />}
          {iconComponent}
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    padding: 10,
    flexDirection: 'row',
    backgroundColor: colors.white,
  },
  img: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
  },
  textContainer: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    textTransform: 'capitalize',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.grey,
  },
});
