import React from 'react';
import asyncComponent from '@common/utility/asyncComponent';
import AppPage from '@common/hoc/AppPage';

const DateRangePicker = asyncComponent(() =>
  import('../../../../../modules/muiComponents/lab/dateTime/DateRangePicker'),
);
export default AppPage(() => <DateRangePicker />);
