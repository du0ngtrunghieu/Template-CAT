import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Switches = asyncComponent(() =>
  import('../../../../modules/muiComponents/inputs/Switches'),
);
export default AppPage(() => <Switches />);
