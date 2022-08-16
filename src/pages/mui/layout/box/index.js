import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Box = asyncComponent(() =>
  import('../../../../modules/muiComponents/layout/Box'),
);
export default AppPage(() => <Box />);
