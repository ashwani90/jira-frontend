import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';
import {FilterSearch,SearchIconWrapper,StyledInputBase, theme} from "../../styles/header";
import FilterList from './filterList';
import SettingsList from "../settings/settingsList";

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

export default function Filter(props) {
  return (
    <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 1,
          width: "100%",
          height: "100%",
          backgroundColor: "#AEBDCA",
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
         {props.listType=="settings" ? <SettingsList list={props.list}/> : <FilterList />} 
      </Paper>
    </Box>
  );
}