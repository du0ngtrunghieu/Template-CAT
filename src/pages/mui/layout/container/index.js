import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Container = asyncComponent(() =>
  import('../../../../modules/muiComponents/layout/Container'),
);
export default AppPage(() => <Container />);
