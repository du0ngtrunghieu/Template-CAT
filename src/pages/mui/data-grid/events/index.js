import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Events = asyncComponent(() =>
  import('../../../../modules/muiComponents/datagrid/Events'),
);
export default AppPage(() => <Events />);
