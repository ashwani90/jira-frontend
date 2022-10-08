import * as React from 'react';
import Box from '@mui/material/Box';
import Task from './task';
import { Grid } from '@mui/material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function TaskList() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          
        },
      }}
    >
         <Grid container spacing={3}>
          
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          </Grid>
              </Box>
  );
}