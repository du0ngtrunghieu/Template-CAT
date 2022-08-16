import React from 'react';
import asyncComponent from '@common/utility/asyncComponent';
import AppPage from '@common/hoc/AppPage';

const TrapFocus = asyncComponent(() =>
  import('../../../../modules/muiComponents/lab/TrapFocus'),
);
export default AppPage(() => <TrapFocus />);
