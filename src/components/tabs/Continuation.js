import React from 'react';
import { styled } from '@mui/material/styles';
import { autocompleteClasses } from '@mui/material';

const settings = ["general", "account", "preferences","general", "account", "preferences"];

const HeaderItem = styled('h1')(() => ({
    fontSize: "16px",
    color: "grey",
    padding: "20px",
  }));

  const Tab = styled('div')(() => ({
    display: "flex",
    alignItems: "center",
  }));

function Continuation() {
    return (
        <Tab>
            <HeaderItem>12-18 Aug</HeaderItem>
            <HeaderItem>20-26 Aug</HeaderItem>
            <HeaderItem>28-02 Sept</HeaderItem>
            <HeaderItem>03-09 Sept</HeaderItem>
            <HeaderItem>10-16 Sept</HeaderItem>
            <HeaderItem>18-24 Sept</HeaderItem>
            <HeaderItem>26-01 Oct</HeaderItem>
            <HeaderItem>03-09 Oct</HeaderItem>
            <HeaderItem>11-17 Oct</HeaderItem>
            <HeaderItem>19-25 Oct</HeaderItem>
            <HeaderItem>27-02 Nov</HeaderItem>
            <HeaderItem>04-10 Nov</HeaderItem>
        </Tab>
    );
}

export default Continuation;