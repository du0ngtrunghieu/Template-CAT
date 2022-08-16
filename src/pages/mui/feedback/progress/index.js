import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Progress = asyncComponent(() =>
  import('../../../../modules/muiComponents/feedback/Progress'),
);
export default AppPage(() => <Progress />);
