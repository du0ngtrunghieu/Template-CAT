import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Stack = asyncComponent(() =>
  import('../../../../modules/muiComponents/layout/Stack'),
);
export default AppPage(() => <Stack />);
