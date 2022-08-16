import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Badges = asyncComponent(() =>
  import('../../../../modules/muiComponents/dataDisplay/Badges'),
);
export default AppPage(() => <Badges />);
