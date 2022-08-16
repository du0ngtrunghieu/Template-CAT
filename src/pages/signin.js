import React from 'react';
import AppPage from '../@common/hoc/DefaultPage/index';
import asyncComponent from '../@common/utility/asyncComponent';

const SignIn = asyncComponent(() => import('../modules/auth/Signin/index'));
export default AppPage(() => <SignIn />);
