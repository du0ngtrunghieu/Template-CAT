import React from 'react';
import asyncComponent from '@common/utility/asyncComponent';
import AppPage from '@common/hoc/AppPage';

const Masonry = asyncComponent(() =>
  import('../../../../modules/muiComponents/lab/Masonry'),
);
export default AppPage(() => <Masonry />);
