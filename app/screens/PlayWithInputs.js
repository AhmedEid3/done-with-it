import React, { useState } from 'react';
import Screen from './Screen';
import { Button, Switch, TextInput } from 'react-native';

import AppLayout from '../components/AppLayout';
import AppTextInput from '../components/AppTextInput';
import { AppPicker } from '../components/picker';
import colors from '../config/theme';

export default function PlayWithInputs() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSwitched, setIsSwitched] = useState(false);

  const categoryOption = [
    { label: 'Furniture', value: '1' },
    { label: 'Clothing', value: '2' },
    { label: 'Cameras', value: '3' },
  ];
  const [categorey, setCategorey] = useState('');

  return (
    <Screen>
      <AppLayout>
        <AppPicker
          selectedOption={categorey}
          onSelectOption={(item) => setCategorey(item)}
          options={categoryOption}
          iconName="apps"
          placeholder="Category"
        />
        <TextInput
          clearButtonMode="always"
          maxLength={10}
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
          placeholder="First Name"
        />

        <AppTextInput
          iconName="account"
          clearButtonMode="always"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
          placeholder="Last Name"
        />
        <AppTextInput
          iconName="email"
          clearButtonMode="always"
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
        />
        <AppTextInput
          iconName="lock"
          clearButtonMode="always"
          secureTextEntry
          keyboardType="numeric"
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
        />

        <Switch
          value={isSwitched}
          onValueChange={(value) => setIsSwitched(value)}
        />

        {/* <AppButton color="primary">Submit</AppButton> */}
        <Button color={colors.primary} title="Submit" />
      </AppLayout>
    </Screen>
  );
}
