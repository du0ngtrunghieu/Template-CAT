import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Sliders = asyncComponent(() =>
  import('../../../../modules/muiComponents/inputs/Slider'),
);
export default AppPage(() => <Sliders />);
