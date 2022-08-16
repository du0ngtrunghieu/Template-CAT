import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Columns = asyncComponent(() =>
  import('../../../../modules/muiComponents/datagrid/Columns'),
);
export default AppPage(() => <Columns />);
