import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Lists = asyncComponent(() =>
  import('../../../../modules/muiComponents/dataDisplay/Lists'),
);
export default AppPage(() => <Lists />);
