import React from 'react';
import AppPage from '../../../../@common/hoc/AppPage';
import asyncComponent from '../../../../@common/utility/asyncComponent';

const Modal = asyncComponent(() =>
  import('../../../../modules/muiComponents/utils/Modal'),
);
export default AppPage(() => <Modal />);
