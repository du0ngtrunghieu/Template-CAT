import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Snackbar = asyncComponent(() =>
  import('../../../../modules/muiComponents/feedback/Snackbar'),
);
export default AppPage(() => <Snackbar />);
