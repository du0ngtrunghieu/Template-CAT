import React from 'react';
import Box from '@mui/material/Box';
import {Button} from '@mui/material';
import {useLayoutContext} from '../../../../utility/AppContextProvider/LayoutContextProvider';
import Typography from '@mui/material/Typography';
import FooterWrapper from './FooterWrapper';

const AppFixedFooter = () => {
  const {footer, footerType} = useLayoutContext();

  return (
    <>
      {footer && footerType === 'fixed' ? (
        <FooterWrapper className='footer fixed-footer'>
          <div className='footerContainer'>
            <Typography>Copy right @dt_hieu 2022</Typography>
            
          </div>
        </FooterWrapper>
      ) : null}
    </>
  );
};

export default AppFixedFooter;
