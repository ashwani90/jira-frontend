import React from 'react';
import { styled, alpha } from '@mui/material/styles';

const ContainerItem = styled('div')(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
  }));

const Item = styled('span')(({ theme }) => ({
    backgroundColor: "inherit",
    color: 'white',
  }));

export default function TextBlock() {

  return (
    <ContainerItem>
    <Item sx={{ textAlign:"left", fontSize: 18, fontWeight: 800 }}>Banner and Display Video</Item>
    <Item sx={{  fontSize: 16, fontWeight: 100, marginLeft: 2, textTransform: "uppercase" }}>11 Layouts 9 Sizes</Item>
    <Item sx={{  fontSize: 16, fontWeight: 100 , marginLeft: 2 , textTransform: "uppercase" }}>DeskTop Mobile</Item>
    </ContainerItem>
  );
}
