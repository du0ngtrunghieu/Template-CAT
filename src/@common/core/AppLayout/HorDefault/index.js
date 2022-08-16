import React from 'react';
import clsx from 'clsx';
import AppContentView from '@common/core/AppContentView';
import AppFixedFooter from './AppFixedFooter';
import AppHeader from './AppHeader';
import AppSidebar from './AppSidebar';
import {useLayoutContext} from '../../../utility/AppContextProvider/LayoutContextProvider';
import AppThemeSetting from '../../AppThemeSetting';
import HorDefaultWrapper from './HorDefaultWrapper';
import MainContent from './MainContent';
import {LayoutType} from '../../../../shared/constants/AppEnums';
import HorDefaultContainer from './HorDefaultContainer';
import PropsTypes from 'prop-types';

const HorDefault = ({children}) => {
  const {footer, layoutType, footerType} = useLayoutContext();

  return (
    <HorDefaultContainer
      className={clsx({
        boxedLayout: layoutType === LayoutType.BOXED,
        framedLayout: layoutType === LayoutType.FRAMED,
      })}
    >
      <HorDefaultWrapper
        className={clsx('horDefaultWrapper', {
          appMainFooter: footer && footerType === 'fluid',
          appMainFixedFooter: footer && footerType === 'fixed',
        })}
      >
        <AppSidebar />

        <MainContent>
          <AppHeader />
          <AppContentView>{children}</AppContentView>
          <AppFixedFooter />
        </MainContent>
        {/* <AppThemeSetting /> */}
      </HorDefaultWrapper>
    </HorDefaultContainer>
  );
};

export default HorDefault;

HorDefault.propTypes = {
  children: PropsTypes.node,
};
