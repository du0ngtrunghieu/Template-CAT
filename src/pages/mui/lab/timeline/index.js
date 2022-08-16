import React from 'react';
import asyncComponent from '@common/utility/asyncComponent';
import AppPage from '@common/hoc/AppPage';

const Timeline = asyncComponent(() =>
  import('../../../../modules/muiComponents/lab/Timeline'),
);
export default AppPage(() => <Timeline />);
