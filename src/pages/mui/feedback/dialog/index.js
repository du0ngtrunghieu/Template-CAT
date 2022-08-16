import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Dialogs = asyncComponent(() =>
  import('../../../../modules/muiComponents/feedback/Dialog'),
);
export default AppPage(() => <Dialogs />);
