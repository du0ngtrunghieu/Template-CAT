import React from 'react';
import AppPage from '../@common/hoc/DefaultPage/index';
import asyncComponent from '../@common/utility/asyncComponent';

const ConfirmSignup = asyncComponent(() =>
  import('../modules/auth/ConfirmSignupAwsCognito'),
);
export default AppPage(() => <ConfirmSignup />);
