import React from 'react';
import asyncComponent from '@common/utility/asyncComponent';
import AppPage from '@common/hoc/AppPage';

const TreeView = asyncComponent(() =>
  import('../../../../modules/muiComponents/lab/TreeView'),
);
export default AppPage(() => <TreeView />);
