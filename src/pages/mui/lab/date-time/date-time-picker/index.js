import React from 'react';
import asyncComponent from '@common/utility/asyncComponent';
import AppPage from '@common/hoc/AppPage';

const DateTimePicker = asyncComponent(() =>
  import('../../../../../modules/muiComponents/lab/dateTime/DateTimePicker'),
);
export default AppPage(() => <DateTimePicker />);
