import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const SpeedDial = asyncComponent(() =>
  import('../../../../modules/muiComponents/navigation/SpeedDial'),
);
export default AppPage(() => <SpeedDial />);
