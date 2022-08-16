import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Popper = asyncComponent(() =>
  import('../../../../modules/muiComponents/utils/Popper'),
);
export default AppPage(() => <Popper />);
