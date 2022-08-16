import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Chips = asyncComponent(() =>
  import('../../../../modules/muiComponents/dataDisplay/Chips'),
);
export default AppPage(() => <Chips />);
