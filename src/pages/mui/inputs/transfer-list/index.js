import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const TransferList = asyncComponent(() =>
  import('../../../../modules/muiComponents/inputs/TransferList'),
);
export default AppPage(() => <TransferList />);
