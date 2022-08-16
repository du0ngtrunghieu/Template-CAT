import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Popover = asyncComponent(() =>
  import('../../../../modules/muiComponents/utils/Popover'),
);
export default AppPage(() => <Popover />);
