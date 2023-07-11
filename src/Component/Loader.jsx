import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { Typography } from '@mui/material';

export default function Loader(props) {
    if(!props.blocking)
    return ""
    else
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress />
      <Typography variant='primary' >
          Loading...
      </Typography>
    </Box>
  );
}