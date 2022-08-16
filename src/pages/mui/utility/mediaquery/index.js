import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const MediaQuery = asyncComponent(() =>
  import('../../../../modules/muiComponents/utils/MediaQuery'),
);
export default AppPage(() => <MediaQuery />);
