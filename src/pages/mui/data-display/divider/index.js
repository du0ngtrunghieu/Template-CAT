import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Divider = asyncComponent(() =>
  import('../../../../modules/muiComponents/dataDisplay/Divider'),
);
export default AppPage(() => <Divider />);
