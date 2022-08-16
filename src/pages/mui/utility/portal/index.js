import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Portal = asyncComponent(() =>
  import('../../../../modules/muiComponents/utils/Portal'),
);
export default AppPage(() => <Portal />);
