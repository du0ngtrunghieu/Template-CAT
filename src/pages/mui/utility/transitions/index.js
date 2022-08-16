import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Transitions = asyncComponent(() =>
  import('../../../../modules/muiComponents/utils/Transitions'),
);
export default AppPage(() => <Transitions />);
