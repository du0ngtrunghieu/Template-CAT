import React from 'react';
import {useThemeContext} from '../../../../utility/AppContextProvider/ThemeContextProvider';
import PropTypes from 'prop-types';
import {alpha, Box} from '@mui/material';
import Logo from '../../../../../assets/icon/logo.svg';
import LogoText from '../../../../../assets/icon/logo_text.svg';

const AppLogo = () => {
  const {theme} = useThemeContext();

  return (
    <Box
      sx={{
        height: {xs: 56, sm: 70},
        padding: 2.5,
        display: 'flex',
        flexDirection: 'row',
        cursor: 'pointer',
        alignItems: 'center',
        justifyContent: 'center',
        '& svg': {
          height: {xs: 30, sm: 40},
        },
      }}
      className='app-logo'
    >
      <Logo fill={theme.palette.primary.main} />
      <Box
        sx={{
          mt: 1,
          '& svg': {
            height: {xs: 25, sm: 30},
          },
        }}
      ></Box>
    </Box>
  );
};

export default AppLogo;
AppLogo.propTypes = {
  color: PropTypes.string,
};
