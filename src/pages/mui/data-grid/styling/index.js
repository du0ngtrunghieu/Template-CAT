import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Styling = asyncComponent(() =>
  import('../../../../modules/muiComponents/datagrid/Styling'),
);
export default AppPage(() => <Styling />);
