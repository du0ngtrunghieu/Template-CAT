import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Accessibility = asyncComponent(() =>
  import('../../../../modules/muiComponents/datagrid/Accessibility'),
);
export default AppPage(() => <Accessibility />);
