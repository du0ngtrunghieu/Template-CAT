import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Editing = asyncComponent(() =>
  import('../../../../modules/muiComponents/datagrid/Editing'),
);
export default AppPage(() => <Editing />);
