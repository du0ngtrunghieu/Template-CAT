import React from 'react';
import Box from '@mui/material/Box';
import {Button} from '@mui/material';
import {useLayoutContext} from '../../../../utility/AppContextProvider/LayoutContextProvider';
import Typography from '@mui/material/Typography';
import FooterWrapper from './FooterWrapper';

const AppFooter = () => {
  const {footer, footerType, navStyle} = useLayoutContext();

  return (
    <>
      {footer &&
      footerType === 'fluid' &&
      navStyle !== 'h-default' &&
      navStyle !== 'hor-light-nav' &&
      navStyle !== 'hor-dark-layout' ? (
        <FooterWrapper className='footer'>
          <div className='footerContainer'>
            <Typography>Copy right @dt_hieu 2022</Typography>
          </div>
        </FooterWrapper>
      ) : null}
    </>
  );
};

export default AppFooter;
