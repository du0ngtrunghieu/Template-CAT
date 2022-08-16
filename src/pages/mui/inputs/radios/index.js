import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const RadiosButton = asyncComponent(() =>
  import('../../../../modules/muiComponents/inputs/Radio'),
);
export default AppPage(() => <RadiosButton />);
