import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Tooltip = asyncComponent(() =>
  import('../../../../modules/muiComponents/dataDisplay/Tooltip'),
);
export default AppPage(() => <Tooltip />);
