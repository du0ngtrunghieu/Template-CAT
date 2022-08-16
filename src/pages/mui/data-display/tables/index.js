import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Tables = asyncComponent(() =>
  import('../../../../modules/muiComponents/dataDisplay/Table'),
);
export default AppPage(() => <Tables />);
