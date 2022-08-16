import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Buttons = asyncComponent(() =>
  import('../../../../modules/muiComponents/inputs/Buttons'),
);
export default AppPage(() => <Buttons />);
