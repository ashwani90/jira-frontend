import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { theme } from '../../styles/header';
import { styled } from '@mui/material/styles';

const Item = styled('div')(() => ({
    marginTop: "10px",
    marginBottom: "10px",
    textAlign: 'left',
    color: "grey",
    marginLeft: "10px",
    border: 0,
    boxShadow: 0,
    fontSize: "20px",
  }));

export default function SettingsList(props) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', bgcolor: 'inherit' }}
      component="nav"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Inbox" sx={{ ml: theme.spacing(1) }} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            {props.list.map((index) => <Item>{index}</Item>)}
        </List>
      </Collapse>
    </List>
  );
}