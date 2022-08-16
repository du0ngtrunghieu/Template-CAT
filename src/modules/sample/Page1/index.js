import React from 'react';
import {Box} from '@mui/material';
import AppPageMeta from '../../../@common/core/AppPageMeta';

const Page1 = () => {
  return (
    <>
      <AppPageMeta />
      <h2>Sample page 1</h2>
      <Box sx={{my: 2}}>You can kick start your app</Box>
    </>
  );
};

export default Page1;
