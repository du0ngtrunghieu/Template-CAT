import React from 'react';
import AppPage from '../../@common/hoc/AppPage';
import asyncComponent from '../../@common/utility/asyncComponent';

const Error500 = asyncComponent(() =>
  import('../../modules/errorPages/Error500'),
);
export default AppPage(() => <Error500 />);
