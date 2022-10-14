import React from 'react';
import VerticalTab from "./VerticalTab";
import { styled } from '@mui/material/styles';

const TabList = styled('div')(() => ({
    display: "flex",
    justifyContent: "center",
   }));

function VerticalTabs() {
    return (
        <TabList>
        <VerticalTab />
        <VerticalTab />
        <VerticalTab />
        <VerticalTab />
        <VerticalTab />
        <VerticalTab />
</TabList>
    );
}

export default VerticalTabs;