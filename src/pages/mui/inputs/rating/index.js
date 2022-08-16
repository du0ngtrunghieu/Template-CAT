import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Rating = asyncComponent(() =>
  import('../../../../modules/muiComponents/inputs/Rating'),
);
export default AppPage(() => <Rating />);
