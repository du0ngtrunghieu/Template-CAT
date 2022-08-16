import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Paper = asyncComponent(() =>
  import('../../../../modules/muiComponents/surfaces/Paper'),
);
export default AppPage(() => <Paper />);
