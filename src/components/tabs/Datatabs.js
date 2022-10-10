import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Grid } from '@mui/material';

const Item = styled('div')(() => ({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    lineHeight: "40px",
    border: 0,
    boxShadow: 0,
    fontSize: "20px",
  }));

  const SubTitle = styled('span')(() => ({
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  }));

  const Title = styled('span')(() => ({
    color: "white",
    fontSize: 22,
  }));

export default function Datatabs(props) {
  return (
    <Grid container spacing={2} sx={{ p: 4  }}>
        <Grid xs={3}>
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: "center",
        '& > :not(style)': {
          m: 1,
          height: 50,
          width: "100%",
          padding: 10,
        },
      }}
    >
        <Paper elevation={3} sx={{
            backgroundImage: "linear-gradient(#E14D2A, #CD104D)",
            display: "flex",
            justifyContent: "space-around",
            }}> 
        <Item>
        <SubTitle sx={{color: "white", }}>2050</SubTitle>
        <Title>Total Orders</Title>
        </Item>
        <ShoppingCartIcon sx={{color: "white", fontSize: "50px"}} />
        </Paper></Box>
        </Grid>
        <Grid xs={3}>
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: "center",
        '& > :not(style)': {
          m: 1,
          height: 50,
          width: "100%",
          padding: 10,
        },
      }}
    >
        <Paper elevation={3} sx={{
            backgroundImage: "linear-gradient(#87A2FB, #6F38C5)",
            display: "flex",
            justifyContent: "space-around",
            }}> 
        <Item>
        <SubTitle sx={{color: "white", }}>2050</SubTitle>
        <Title>Total Orders</Title>
        </Item>
        <ShoppingCartIcon sx={{color: "white", fontSize: "50px"}} />
        </Paper></Box>
        </Grid>
        <Grid xs={3}>
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: "center",
        '& > :not(style)': {
          m: 1,
          height: 50,
          width: "100%",
          padding: 10,
        },
      }}
    >
        <Paper elevation={3} sx={{
            backgroundImage: "linear-gradient(#B6E388, #E1FFB1)",
            display: "flex",
            justifyContent: "space-around",
            }}> 
        <Item>
        <SubTitle sx={{color: "white", }}>2050</SubTitle>
        <Title>Total Orders</Title>
        </Item>
        <ShoppingCartIcon sx={{color: "white", fontSize: "50px"}} />
        </Paper></Box>
        </Grid>
        <Grid xs={3}>
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: "center",
        '& > :not(style)': {
          m: 1,
          height: 50,
          width: "100%",
          padding: 10,
        },
      }}
    >
        <Paper elevation={3} sx={{
            backgroundImage: "linear-gradient(#400D51, #31E1F7)",
            display: "flex",
            justifyContent: "space-around",
            }}> 
        <Item>
        <SubTitle sx={{color: "white", }}>2050</SubTitle>
        <Title>Total Orders</Title>
        </Item>
        <ShoppingCartIcon sx={{color: "white", fontSize: "50px"}} />
        </Paper></Box>
        </Grid>
</Grid>
  );
}