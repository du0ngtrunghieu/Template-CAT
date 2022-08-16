import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Cards = asyncComponent(() =>
  import('../../../../modules/muiComponents/surfaces/Card'),
);
export default AppPage(() => <Cards />);
