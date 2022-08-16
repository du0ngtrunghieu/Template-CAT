import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Tabs = asyncComponent(() =>
  import('../../../../modules/muiComponents/navigation/Tabs'),
);
export default AppPage(() => <Tabs />);
