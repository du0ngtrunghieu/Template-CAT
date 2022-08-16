import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Grid = asyncComponent(() =>
  import('../../../../modules/muiComponents/layout/Grid'),
);
export default AppPage(() => <Grid />);
