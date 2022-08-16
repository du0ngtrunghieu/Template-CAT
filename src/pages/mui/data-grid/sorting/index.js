import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Sorting = asyncComponent(() =>
  import('../../../../modules/muiComponents/datagrid/Sorting'),
);
export default AppPage(() => <Sorting />);
