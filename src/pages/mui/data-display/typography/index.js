import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Typography = asyncComponent(() =>
  import('../../../../modules/muiComponents/dataDisplay/Typography'),
);
export default AppPage(() => <Typography />);
