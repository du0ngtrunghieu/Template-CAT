import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const AppBar = asyncComponent(() =>
  import('../../../../modules/muiComponents/surfaces/AppBar'),
);
export default AppPage(() => <AppBar />);
