import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import colors from '../config/theme';
import Screen from './Screen';
import AppCard from '../components/AppCard';
import AppLayout from '../components/AppLayout';

export default function ListingsScreen() {
  const listingContent = [
    {
      id: 0,
      title: 'Red Jacket for sale',
      price: '100',
      imgSrc: require('../assets/jacket.jpg'),
    },
    {
      id: 1,
      title: 'Couch in great condition',
      price: '1000',
      imgSrc: require('../assets/jacket.jpg'),
    },
  ];
  return (
    <Screen style={styles.container}>
      <AppLayout>
        <FlatList
          data={listingContent}
          keyExtractor={(list) => list.id.toString()}
          renderItem={({ item }) => (
            <AppCard
              title={item.title}
              subtitle={'$' + item.price}
              image={item.imgSrc}
            />
          )}
        />
      </AppLayout>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.orangeLight,
  },
});
