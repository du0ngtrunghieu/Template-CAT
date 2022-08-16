import React from 'react';
import {AppSuspense} from '../../index';
import AppFooter from '../AppLayout/components/AppFooter';
import AppErrorBoundary from '../AppErrorBoundary';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import AppContentViewWrapper from './AppContentViewWrapper';

// const TransitionWrapper = ({children}) => {
//   const {rtAnim} = useContext(AppContext);
//   const {pathname} = useRouter();
//   if (rtAnim === RouteTransition.NONE) {
//     return <>{children}</>;
//   }
//   return (
//     <TransitionGroup appear enter exit>
//       <CSSTransition
//         key={pathname}
//         timeout={{enter: 300, exit: 300}}
//         classNames={rtAnim}
//       >
//         {children}
//       </CSSTransition>
//     </TransitionGroup>
//   );
// };
//
// TransitionWrapper.propTypes = {
//   children: PropTypes.node.isRequired,
// };
const AppContentView = ({children, sxStyle}) => {
  return (
    <AppContentViewWrapper className='app-content-view'>
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          p: {xs: 5, md: 7.5, xl: 12.5},
          ...sxStyle,
        }}
        className='app-content'
      >
        <AppSuspense>
          <AppErrorBoundary>{children}</AppErrorBoundary>
        </AppSuspense>
      </Box>
      <AppFooter />
    </AppContentViewWrapper>
  );
};

export default AppContentView;

AppContentView.propTypes = {
  sxStyle: PropTypes.object,
  children: PropTypes.node,
};
