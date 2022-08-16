import React from 'react';
import AppPage from '../../@common/hoc/AppPage';
import asyncComponent from '../../@common/utility/asyncComponent';

const Error503 = asyncComponent(() =>
  import('../../modules/errorPages/Error503'),
);
export default AppPage(() => <Error503 />);
