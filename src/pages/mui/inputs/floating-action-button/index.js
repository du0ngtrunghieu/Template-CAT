import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const FAB = asyncComponent(() =>
  import('../../../../modules/muiComponents/inputs/FloatingActionButton'),
);
export default AppPage(() => <FAB />);
