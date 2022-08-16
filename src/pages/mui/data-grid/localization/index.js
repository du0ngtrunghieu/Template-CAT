import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Localization = asyncComponent(() =>
  import('../../../../modules/muiComponents/datagrid/Localization'),
);
export default AppPage(() => <Localization />);
