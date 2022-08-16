import React from 'react';
import AppPage from '../../@common/hoc/AppPage';
import asyncComponent from '../../@common/utility/asyncComponent';

const ComingSoon = asyncComponent(() =>
  import('../../modules/errorPages/ComingSoon'),
);
export default AppPage(() => <ComingSoon />);
