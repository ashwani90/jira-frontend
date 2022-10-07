import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled, alpha } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';
import {FilterSearch,SearchIconWrapper,StyledInputBase, theme} from "../../styles/header";
import FilterList from './filterList';

const Item = styled()(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    padding: theme.spacing(1),
    marginTop: "10px",
    marginBottom: "10px",
    marginLeft: "6px",
    textAlign: 'left',
    color: "grey",
    fontSize: "16px",
    border: 0,
    boxShadow: 0,
  }));

export default function Filter() {
  return (
    <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 1,
          width: "100%",
          height: "100%",
          backgroundColor: "grey",
        },
      }}
    >
      <Paper  >
      <Item>Filter</Item>
      <Divider />
      <FilterSearch>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Enter a keyword to filter"
              inputProps={{ 'aria-label': 'search' }}
            />
          </FilterSearch>
          <Divider />
          <FilterList />
      </Paper>
    </Box>
  );
}