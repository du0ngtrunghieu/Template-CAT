import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const AutoComplete = asyncComponent(() =>
  import('../../../../modules/muiComponents/inputs/AutoComplete'),
);
export default AppPage(() => <AutoComplete />);
