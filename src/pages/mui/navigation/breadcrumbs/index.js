import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const BreadCrumbs = asyncComponent(() =>
  import('../../../../modules/muiComponents/navigation/Breadcrumbs'),
);
export default AppPage(() => <BreadCrumbs />);
