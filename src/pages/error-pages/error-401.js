import React from 'react';
import AppPage from '../../@common/hoc/AppPage';
import asyncComponent from '../../@common/utility/asyncComponent';

const Error401 = asyncComponent(() =>
  import('../../modules/errorPages/Error401'),
);
export default AppPage(() => <Error401 />);
