import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Accordion = asyncComponent(() =>
  import('../../../../modules/muiComponents/surfaces/Accordion'),
);
export default AppPage(() => <Accordion />);
