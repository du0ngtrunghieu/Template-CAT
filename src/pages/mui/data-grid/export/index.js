import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Export = asyncComponent(() =>
  import('../../../../modules/muiComponents/datagrid/Export'),
);
export default AppPage(() => <Export />);
