import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const ClickAwayListener = asyncComponent(() =>
  import('../../../../modules/muiComponents/utils/ClickawayListener'),
);
export default AppPage(() => <ClickAwayListener />);
