import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Avatars = asyncComponent(() =>
  import('../../../../modules/muiComponents/dataDisplay/Avatar'),
);
export default AppPage(() => <Avatars />);
