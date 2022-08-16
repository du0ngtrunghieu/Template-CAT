import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const ImageList = asyncComponent(() =>
  import('../../../../modules/muiComponents/layout/ImageList'),
);
export default AppPage(() => <ImageList />);
