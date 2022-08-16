import React from 'react';
import AppPage from '../@common/hoc/DefaultPage/index';
import asyncComponent from '../@common/utility/asyncComponent';

const ForgetPassword = asyncComponent(() =>
  import('../modules/auth/ForgetPassword/index'),
);
export default AppPage(() => <ForgetPassword />);
