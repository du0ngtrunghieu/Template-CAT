import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Selects = asyncComponent(() =>
  import('../../../../modules/muiComponents/inputs/Selects'),
);
export default AppPage(() => <Selects />);
