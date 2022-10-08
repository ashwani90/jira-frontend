import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { theme } from '../../styles/header';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function FilterList() {
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
        <FormGroup  sx={{ ml: "20px" }}>
  <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
  <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
  <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
</FormGroup>
        </List>
      </Collapse>
    </List>
  );
}