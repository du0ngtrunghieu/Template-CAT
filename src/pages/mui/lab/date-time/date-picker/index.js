import React from 'react';
import asyncComponent from '@common/utility/asyncComponent';
import AppPage from '@common/hoc/AppPage';

const DatePicker = asyncComponent(() =>
  import('../../../../../modules/muiComponents/lab/dateTime/DatePicker'),
);
export default AppPage(() => <DatePicker />);
