import React from 'react';
import { View, StyleSheet } from 'react-native';

import Screen from './Screen';
import AppLayout from '../components/AppLayout';
import AppBackground from '../components/AppBackground';
import AppLogo from '../components/AppLogo';
import AppButton from '../components/AppButton';

export default function WelcomeScreen() {
  return (
    <AppBackground source={require('../assets/background.jpg')}>
      <Screen>
        <AppLayout style={styles.layout}>
          <AppLogo slogan="Sell what you don't need" />

          <View>
            <AppButton onPress={() => console.log('Login')}>Login</AppButton>
            <AppButton
              onPress={() => console.log('Register')}
              color="secondary"
            >
              Register
            </AppButton>
          </View>
        </AppLayout>
      </Screen>
    </AppBackground>
  );
}

const styles = StyleSheet.create({
  layout: { justifyContent: 'space-between' },
});
