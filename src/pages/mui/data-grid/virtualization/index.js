import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Virtualization = asyncComponent(() =>
  import('../../../../modules/muiComponents/datagrid/Virtualization'),
);
export default AppPage(() => <Virtualization />);
