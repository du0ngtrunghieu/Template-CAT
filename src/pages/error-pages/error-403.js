import React from 'react';
import AppPage from '../../@common/hoc/AppPage';
import asyncComponent from '../../@common/utility/asyncComponent';

const Error403 = asyncComponent(() =>
  import('../../modules/errorPages/Error403'),
);
export default AppPage(() => <Error403 />);
