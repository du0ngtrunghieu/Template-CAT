import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Skeleton = asyncComponent(() =>
  import('../../../../modules/muiComponents/feedback/Skeleton'),
);
export default AppPage(() => <Skeleton />);
