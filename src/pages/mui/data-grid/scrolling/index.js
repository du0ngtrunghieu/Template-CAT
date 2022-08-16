import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Scrolling = asyncComponent(() =>
  import('../../../../modules/muiComponents/datagrid/Scrolling'),
);
export default AppPage(() => <Scrolling />);
