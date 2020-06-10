import React from 'react';
import { View } from 'react-native';

import Screen from './Screen';
import AppLayout from '../components/AppLayout';
import { AppListItem } from '../components/list-item';
import AppCard from '../components/AppCard';

export default function ListingDetailsScreen() {
  return (
    <Screen>
      <View>
        <AppCard
          title="black jacket for sale!"
          subtitle="$100"
          image={require('../assets/jacket-a.jpg')}
        />

        <AppLayout>
          <AppListItem
            title="Ahmed Eid"
            subtitle="5 Listing"
            image={require('../assets/ahmed.jpg')}
          />
        </AppLayout>
      </View>
    </Screen>
  );
}
