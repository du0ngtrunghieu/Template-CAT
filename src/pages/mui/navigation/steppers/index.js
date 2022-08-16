import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Steppers = asyncComponent(() =>
  import('../../../../modules/muiComponents/navigation/Stepper'),
);
export default AppPage(() => <Steppers />);
