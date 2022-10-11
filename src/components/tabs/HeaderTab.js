import React from 'react';
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const settings = ["general", "account", "preferences","general", "account", "preferences"];

const HeaderItem = styled('h1')(() => ({
    marginLeft: "16vw",
    marginTop: "8vh",
    fontSize: "40px",
  }));

  const Tab = styled('div')(() => ({
    display: "flex",
    alignItems: "center"
  }));

function HeaderTab() {
    return (
        <Tab>
        <HeaderItem>Schedule Tasks</HeaderItem>
        <Fab color="primary" aria-label="add" sx={{marginLeft: 3}}>
  <AddIcon />
</Fab>  
</Tab>
    );
}

export default HeaderTab;