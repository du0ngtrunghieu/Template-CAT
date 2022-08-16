import React from 'react';
import Box from '@mui/material/Box';
import AuthWrapper from '../AuthWrapper';
import AppLogo from '../../../@common/core/AppLayout/components/AppLogo';
import SignupJwtAuth from './SignupJwtAuth';

const Signup = () => {
  return (
    <AuthWrapper>
      <Box sx={{width: '100%'}}>
        <Box sx={{mb: {xs: 6, xl: 8}}}>
          <Box
            sx={{
              mb: 5,
              display: 'flex',
              alignItems: 'center',
            }}
          ></Box>
        </Box>
        <SignupJwtAuth />
      </Box>
    </AuthWrapper>
  );
};

export default Signup;
