import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Backdrop = asyncComponent(() =>
  import('../../../../modules/muiComponents/feedback/Backdrop'),
);
export default AppPage(() => <Backdrop />);
