import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from './Screen';
import AppLayout from '../components/AppLayout';
import AppLogo from '../components/AppLogo';
import { AppForm, AppFormField, AppSubmitButton } from '../components/forms';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(6).label('Password'),
});

export default function LoginScreen() {
  return (
    <Screen>
      <AppLayout>
        <AppLogo style={styles.logo} />

        <AppForm
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormField
            iconName="email"
            clearButtonMode="always"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
            placeholder="Email"
            name="email"
          />

          <AppFormField
            iconName="lock"
            clearButtonMode="always"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            textContentType="password"
            placeholder="Password"
            name="password"
          />

          <AppSubmitButton title="Login" />
        </AppForm>
      </AppLayout>
    </Screen>
  );
}

const styles = StyleSheet.create({ logo: { marginBottom: 40 } });
