import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Alert = asyncComponent(() =>
  import('../../../../modules/muiComponents/feedback/Alert'),
);
export default AppPage(() => <Alert />);
