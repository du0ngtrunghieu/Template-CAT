import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Components = asyncComponent(() =>
  import('../../../../modules/muiComponents/datagrid/Components'),
);
export default AppPage(() => <Components />);
