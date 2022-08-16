import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Rows = asyncComponent(() =>
  import('../../../../modules/muiComponents/datagrid/Rows'),
);
export default AppPage(() => <Rows />);
