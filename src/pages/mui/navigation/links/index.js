import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Links = asyncComponent(() =>
  import('../../../../modules/muiComponents/navigation/Links'),
);
export default AppPage(() => <Links />);
