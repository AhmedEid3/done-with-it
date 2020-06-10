import React, { useState } from 'react';
import { FlatList } from 'react-native';

import {
  AppListItem,
  AppListItemSeperator,
  AppListItemDelete,
} from '../components/list-item';

import Screen from './Screen';

const initMessages = [
  {
    id: 1,
    titile: 'Message 1',
    description: 'Description 1....',
    image: require('../assets/ahmed.jpg'),
  },
  {
    id: 2,
    titile: 'Message 2',
    description: 'Description 2....',
    image: require('../assets/ahmed.jpg'),
  },
  {
    id: 3,
    titile: 'Message 3',
    description: 'Description 3....',
    image: require('../assets/ahmed.jpg'),
  },
];

export default function MessagesScreen() {
  const [messages, setMessages] = useState(initMessages);
  const [refreshing] = useState(false);

  function handleDelete(item) {
    setMessages(messages.filter((msg) => msg.id !== item.id));
  }

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <AppListItem
            title={item.titile}
            subtitle={item.description}
            image={item.image}
            onPress={() => console.log(item)}
            renderRightActions={() => (
              <AppListItemDelete onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => <AppListItemSeperator />}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              titile: 'Message 2',
              description: 'Description 2....',
              image: require('../assets/ahmed.jpg'),
            },
          ])
        }
      />
    </Screen>
  );
}
