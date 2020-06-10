import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from '../../screens/Screen';
import AppText from '../AppText';
import AppPickerItem from './AppPickerItem';
import colors from '../../config/theme';

export default function AppPicker({
  iconName,
  placeholder,
  options,
  selectedOption,
  onSelectOption,
}) {
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setVisibleModal(true)}>
        <View style={styles.container}>
          {iconName && (
            <MaterialCommunityIcons
              style={styles.icon}
              size={25}
              color={colors.medium}
              name={iconName}
            />
          )}
          <View style={styles.input}>
            <AppText>{selectedOption.label || placeholder}</AppText>
          </View>
          <MaterialCommunityIcons
            size={25}
            color={colors.medium}
            name="chevron-down"
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={visibleModal} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setVisibleModal(false)} />
          <FlatList
            data={options}
            keyExtractor={(option) => option.value.toString()}
            renderItem={({ item }) => (
              <AppPickerItem
                title={item.label}
                onPress={() => {
                  setVisibleModal(false);
                  onSelectOption(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: colors.orangeLight,
    marginVertical: 10,
    height: 50,
    paddingHorizontal: 15,
  },
  input: {
    flexGrow: 1,
  },
  text: { color: colors.dark },
  icon: { marginRight: 15 },
});
