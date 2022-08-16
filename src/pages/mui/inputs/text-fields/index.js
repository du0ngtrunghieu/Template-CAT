import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const TextFields = asyncComponent(() =>
  import('../../../../modules/muiComponents/inputs/TextField'),
);
export default AppPage(() => <TextFields />);
