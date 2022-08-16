import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const ToggleButtons = asyncComponent(() =>
  import('../../../../modules/muiComponents/inputs/ToggleButtons'),
);
export default AppPage(() => <ToggleButtons />);
