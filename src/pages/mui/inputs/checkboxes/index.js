import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Checkboxes = asyncComponent(() =>
  import('../../../../modules/muiComponents/inputs/Checkboxes'),
);
export default AppPage(() => <Checkboxes />);
