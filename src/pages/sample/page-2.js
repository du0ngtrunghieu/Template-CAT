import React from 'react';
import AppPage from '../../@common/hoc/AppPage';
import asyncComponent from '../../@common/utility/asyncComponent';

const Page2 = asyncComponent(() => import('../../modules/sample/Page2'));
export default AppPage(() => <Page2 />);
