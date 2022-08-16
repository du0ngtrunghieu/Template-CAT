import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const BottomNavigation = asyncComponent(() =>
  import('../../../../modules/muiComponents/navigation/BottomNavigation'),
);
export default AppPage(() => <BottomNavigation />);
