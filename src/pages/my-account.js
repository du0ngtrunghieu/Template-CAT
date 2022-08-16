import React from 'react';
import AppPage from '../@common/hoc/AppPage';
import asyncComponent from '../@common/utility/asyncComponent';

const Page1 = asyncComponent(() => import('../modules/extraPages/Account'));
export default AppPage(() => <Page1 />);
