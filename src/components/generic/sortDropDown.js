import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled, alpha } from '@mui/material/styles';
import FormModal from '../forms/formModal';

const StyledBox = styled(Box)(() => ({
    backgroundColor: "inherit",
    display: "flex",
    alignContent: "space-around",
    maxWidth: 200,
  }));

export default function SortDropDown() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const ref = React.createRef();

  const openForm = () => {
    console.log(ref.current);
    ref.current.link.click();
  }

  return (
    <StyledBox >
      <FormControl sx={{width: 200}}>
        <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Sort By"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        
      </FormControl>
      
      <FormModal/>
    </StyledBox>
  );
}
