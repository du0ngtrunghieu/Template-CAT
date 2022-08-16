import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const TextareaAutosize = asyncComponent(() =>
  import('../../../../modules/muiComponents/utils/TextareaAutosize'),
);
export default AppPage(() => <TextareaAutosize />);
