import React from 'react';
import asyncComponent from '@common/utility/asyncComponent';
import AppPage from '@common/hoc/AppPage';

const TimePicker = asyncComponent(() =>
  import('../../../../../modules/muiComponents/lab/dateTime/TimePicker'),
);
export default AppPage(() => <TimePicker />);
