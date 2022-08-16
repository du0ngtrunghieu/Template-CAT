import React from 'react';
import AppPage from '../@common/hoc/DefaultPage/index';
import asyncComponent from '../@common/utility/asyncComponent';

const SignUP = asyncComponent(() => import('../modules/auth/Signup/index'));
export default AppPage(() => <SignUP />);
