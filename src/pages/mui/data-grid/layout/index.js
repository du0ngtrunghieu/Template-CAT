import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Layout = asyncComponent(() =>
  import('../../../../modules/muiComponents/datagrid/Layout'),
);
export default AppPage(() => <Layout />);
