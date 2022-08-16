import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Selection = asyncComponent(() =>
  import('../../../../modules/muiComponents/datagrid/Selection'),
);
export default AppPage(() => <Selection />);
