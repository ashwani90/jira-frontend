import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';

const Header = styled('div')(() => ({
    display: "flex",
    justifyContent: "space-between",
    padding: 15,
    '& > .dayItem': {
        fontWeight: "800",
        fontSize: "16px"
      },
      '& > .dayCount': {
        color: "grey"
      },
   }));

 const Item = styled('div')(() => ({
    padding: 15,
    '& > .container': {
        display: "flex",
        justifyContent: "space-between",
    },
    '& > .timeBlock': {
        marginTop: 2,
        padding: 5,
    },
    '&.colorChange': {
        backgroundColor: "#FF7777",
    },
    backgroundColor: "#31E1F7",
    margin: "10px 0px",
    borderRadius: "10px"
 }));

function VerticalTab() {
    return (
        <>
       <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 200,
        },
      }}
    >
      <Paper elevation={3} >
        <Header>
            <span className='dayItem'>Monday</span>
            <span className='dayCount'>01</span>
        </Header>
        <Item>
            <div className="container">
            <span>Task Name</span>
            <EditIcon />
            </div>
            <span>There could be some description that can be given here</span>
            <div className='timeBlock'>
                Start At: 12:00
            </div>
            <div className='timeBlock'>
                Assignee: Ashwani Gaur
            </div>
        </Item>
        <Item className="colorChange">
            <div className="container">
            <span>Task Name</span>
            <EditIcon />
            </div>
            <span>There could be some description that can be given here</span>
            <div className='timeBlock'>
                Start At: 12:00
            </div>
            <div className='timeBlock'>
                Assignee: Ashwani Gaur
            </div>
        </Item>
        <Item>
            <div className="container">
            <span>Task Name</span>
            <EditIcon />
            </div>
            <span>There could be some description that can be given here</span>
            <div className='timeBlock'>
                Start At: 12:00
            </div>
            <div className='timeBlock'>
                Assignee: Ashwani Gaur
            </div>
        </Item>
        <Item className="colorChange">
            <div className="container">
            <span>Task Name</span>
            <EditIcon />
            </div>
            <span>There could be some description that can be given here</span>
            <div className='timeBlock'>
                Start At: 12:00
            </div>
            <div className='timeBlock'>
                Assignee: Ashwani Gaur
            </div>
        </Item>
        </Paper>
    </Box>
</>
    );
}

export default VerticalTab;