import React from 'react';
import AppPage from '../../@common/hoc/AppPage';
import asyncComponent from '../../@common/utility/asyncComponent';

const Error404 = asyncComponent(() =>
  import('../../modules/errorPages/Error404'),
);
export default AppPage(() => <Error404 />);
