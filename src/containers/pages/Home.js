import * as React from 'react';
import Header from '../../components/header/Header';
import Tabs from '../../components/header/tabs';
import Grid from '@mui/material/Grid';
import { styled, alpha } from '@mui/material/styles';
import { Paper } from '@mui/material';
import Filter from "../../components/filter/filter";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Home() {
  return (
    <>
   <Header />
   <Grid container sx={{ p: 2  }}>
   <Tabs />
   <Tabs />
   </Grid>
   <Grid container sx={{ p: 2  }}>
  <Grid item xs={3}>
    <Filter />
  </Grid>
  <Grid item xs={9}>
    <Item></Item>
  </Grid>
</Grid>
   </>
  );
}

export default Home;
