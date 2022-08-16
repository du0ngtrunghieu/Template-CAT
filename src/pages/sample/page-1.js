import React from 'react';
import AppPage from '../../@common/hoc/AppPage';
import asyncComponent from '../../@common/utility/asyncComponent';

const Page1 = asyncComponent(() => import('../../modules/sample/Page1'));
export default AppPage(() => <Page1 />);
