import React from 'react';
import Filter from '../../components/filter/filter';
import { Grid } from '@mui/material';
import Header from '../../components/header/Header';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';

const settings = ["general", "account", "preferences","general", "account", "preferences"];

const Item = styled('div')(() => ({
    display: "flex",
    justifyContent: "center",
    border: 0,
    boxShadow: 0,
    fontSize: "20px",
  }));

function Settings() {
    return (
        <>
        <Header />
        <Grid container spacing={2} sx={{ p: 2  }}>
  <Grid xs={3} >
   
        <Filter listType="settings" list={settings}/>
       
  </Grid>
  <Grid xs={9} sx={{m:0}} >
  <Grid container >
        <Grid xs={4} sx={{m:0}} >
            <Item>
        <FormControlLabel control={<Switch defaultChecked />} label="Label" />
        </Item>
        </Grid>
        <Grid xs={4} sx={{m:0}}>
            <Item>
        <FormControlLabel control={<Switch defaultChecked />} label="Label" />
        </Item>
        </Grid>
        <Grid xs={4} sx={{m:0}}>
            <Item>
        <FormControlLabel control={<Switch defaultChecked />} label="Label" />
        </Item>
        </Grid>
        </Grid>
  </Grid>
</Grid>
</>
    );
}

export default Settings;