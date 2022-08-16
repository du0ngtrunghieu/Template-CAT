import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Drawers = asyncComponent(() =>
  import('../../../../modules/muiComponents/navigation/Drawer'),
);
export default AppPage(() => <Drawers />);
