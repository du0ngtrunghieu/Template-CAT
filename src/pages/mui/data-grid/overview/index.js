import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Overview = asyncComponent(() =>
  import('../../../../modules/muiComponents/datagrid/Overview'),
);
export default AppPage(() => <Overview />);
