import * as React from 'react';
import TTabs from '../../components/header/tabs';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';
import Filter from "../../components/filter/filter";
import SortDropDown from '../../components/generic/sortDropDown';
import TextBlock from '../../components/generic/textBlock';
import TaskList from '../../components/task/taskList';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#AEBDCA",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: "block",
  }));

const StyledGrid = styled(Grid)(({ theme }) => ({
  backgroundColor: "#AEBDCA",
}));

const items = ["one", "two", "three"];

function Home() {
  return (
    <>
   <Grid container sx={{ p: 2  }}>
   <TTabs items={items}/>
   </Grid>
   <StyledGrid container sx={{ p: 2, backgroundColor: "grey" }}>
  <Grid item xs={3}>
    <Filter />
  </Grid>
  <Grid item xs={9}>
    <Item>
    <SortDropDown />
    </Item>
    <Item>
      <TextBlock />
    </Item>
    <TaskList />
  </Grid>
</StyledGrid>
   </>
  );
}

export default Home;
