import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import colors from '../config/theme';
import Screen from './Screen';
import { AppListItem, AppListItemSeperator } from '../components/list-item';
import AppIcon from '../components/AppIcon';

export default function AccountScreen() {
  const listContent = [
    {
      id: 0,
      title: 'My Listing',
      iconName: 'format-list-bulleted',
      backgroundColor: 'primary',
    },
    {
      id: 1,
      title: 'My Mesages',
      iconName: 'email',
      backgroundColor: 'secondary',
    },
  ];

  return (
    <Screen style={styles.container}>
      <FlatList
        data={listContent}
        keyExtractor={(list) => list.id.toString()}
        ListHeaderComponent={() => (
          <AppListItem
            title="Ahmed Eid"
            onPress={() => {}}
            subtitle="ahmed.eid3@outlook.com"
            image={require('../assets/ahmed.jpg')}
          />
        )}
        ListHeaderComponentStyle={styles.header}
        renderItem={({ item }) => (
          <AppListItem
            onPress={() => {}}
            title={item.title}
            iconComponent={
              <AppIcon
                iconName={item.iconName}
                backgroundColor={item.backgroundColor}
              />
            }
          />
        )}
        ItemSeparatorComponent={() => <AppListItemSeperator />}
        ListFooterComponentStyle={styles.footer}
        ListFooterComponent={() => (
          <AppListItem
            onPress={() => {}}
            title="Log Out"
            iconComponent={
              <AppIcon iconName="logout" backgroundColor={colors.yellow} />
            }
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.orangeLight,
  },
  header: {
    marginVertical: 35,
  },
  footer: {
    marginVertical: 35,
  },
});
