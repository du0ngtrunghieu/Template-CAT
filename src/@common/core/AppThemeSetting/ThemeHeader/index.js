import React from 'react';
import {CustomizerItemWrapper} from '../index.style';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import {HeaderType} from '../../../../shared/constants/AppEnums';
import {
  useLayoutActionsContext,
  useLayoutContext,
} from '../../../utility/AppContextProvider/LayoutContextProvider';
import Switch from '@mui/material/Switch';

const ThemeHeader = () => {
  const {header} = useLayoutContext();
  const {setHeader} = useLayoutActionsContext();
  const {headerType} = useLayoutContext();
  const {setHeaderType} = useLayoutActionsContext();

  return (
    <CustomizerItemWrapper>
      <Box sx={{display: 'flex', alignItems: 'center', mb: 4}}>
        <Box component='h4'>Header</Box>
        <Box component='span' ml='auto'>
          <Switch
            checked={header}
            onChange={() => setHeader(!header)}
            value='checkedA'
            inputProps={{'aria-label': 'secondary checkbox'}}
          />
        </Box>
      </Box>
      <FormControl
        variant='outlined'
        sx={{
          width: '100%',
        }}
      >
        <InputLabel id='select-header'>Header Type</InputLabel>
        <Select
          sx={{
            '& .MuiOutlinedInput-input': {
              padding: '12px 32px 12px 14px',
            },
          }}
          labelId='select-header'
          label='Header Type'
          value={headerType}
          onChange={(e) => setHeaderType(e.target.value)}
        >
          <MenuItem value={HeaderType.FIXED}>Fixed</MenuItem>
        </Select>
      </FormControl>
    </CustomizerItemWrapper>
  );
};

export default ThemeHeader;
