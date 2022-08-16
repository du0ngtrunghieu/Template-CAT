import React from 'react';
import AppPage from '../@common/hoc/DefaultPage/index';
import asyncComponent from '../@common/utility/asyncComponent';

const ResetPassword = asyncComponent(() =>
  import('../modules/auth/ResetPasswordAwsCognito'),
);
export default AppPage(() => <ResetPassword />);
