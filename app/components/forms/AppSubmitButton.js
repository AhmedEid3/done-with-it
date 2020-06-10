import React from 'react';
import { useFormikContext } from 'formik';

import AppButton from '../AppButton';

export default function AppSubmitButton({ title, color }) {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton
      color={color || 'primary'}
      title={title}
      onPress={handleSubmit}
    />
  );
}
