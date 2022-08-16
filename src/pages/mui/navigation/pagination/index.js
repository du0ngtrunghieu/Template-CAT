import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Pagination = asyncComponent(() =>
  import('../../../../modules/muiComponents/navigation/Pagination'),
);
export default AppPage(() => <Pagination />);
