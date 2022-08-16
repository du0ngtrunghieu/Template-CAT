import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Filtering = asyncComponent(() =>
  import('../../../../modules/muiComponents/datagrid/Filtering'),
);
export default AppPage(() => <Filtering />);
