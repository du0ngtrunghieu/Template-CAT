import React from 'react';
import AppPage from '../../@common/hoc/AppPage';
import asyncComponent from '../../@common/utility/asyncComponent';

const Maintenance = asyncComponent(() =>
  import('../../modules/errorPages/Maintenance'),
);
export default AppPage(() => <Maintenance />);
