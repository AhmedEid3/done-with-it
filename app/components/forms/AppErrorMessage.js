import React from 'react';

import AppText from '../AppText';
import colors from '../../config/theme';

export default function AppErrorMessage({ visible, error }) {
  if (!visible || !error) {
    return null;
  }

  return <AppText color={colors.danger}>{error}</AppText>;
}
