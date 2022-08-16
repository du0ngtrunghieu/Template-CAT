import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Menu = asyncComponent(() =>
  import('../../../../modules/muiComponents/navigation/Menu'),
);
export default AppPage(() => <Menu />);
