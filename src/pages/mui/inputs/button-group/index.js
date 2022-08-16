import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const ButtonGroup = asyncComponent(() =>
  import('../../../../modules/muiComponents/inputs/ButtonGroup'),
);
export default AppPage(() => <ButtonGroup />);
