import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const settings = ["general", "account", "preferences","general", "account", "preferences"];

const HeaderItem = styled('h1')(() => ({
    fontSize: "16px",
    color: "grey",
    padding: "20px",
    border: "1px solid grey",
    width: "100px",
    '&.hidden': {
      display: "none",
    },
  }));

  

  const weeks = [{"text": "12-18 Aug"}, {"text": "20-26 Aug"}, {"text": "28-02 Sept"}, {"text": "03-09 Sept"}, {"text": "10-16 Sept"}, {"text": "18-24 Sept"}, {"text": "26-01 Oct"}, {"text": "11-17 Oct"}, {"text": "19-25 Oct"}, {"text": "27-02 Nov"},{"text": "03-10 Nov"}, {"text": "12-18 Nov"}, {"text": "20-26 Nov"}, {"text": "28-04 Dec"} ];
  
  const Tab = styled('div')(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const Bold = styled('span')(() => ({
    fontWeight: "800",
    color: "black"
  }));

  

function Continuation() {
  const [current,setCurrent] = useState(9);
  const handleBackClick = () => {
    if (current>4) {
      setCurrent((current) => current-1);
    }
  }

  const handleForwardClick = () => {
    if (weeks.length < current + 4) {
      setCurrent((current) => current+1)
    }
  }
    return (
        <Tab>
          <ArrowBackIosIcon sx={{fontSize: "36px"}} onClick={() => handleBackClick()}/>
            {weeks.map((index,i) => {
              if (i >= current - 4 && i<= current+4 ) {
                if (i== current) {
                  return <HeaderItem key={index.text}><Bold>{index.text}</Bold></HeaderItem>
                }
              return (
                <HeaderItem key={index.text}>{index.text}</HeaderItem>
              )
            }
            })}
            
            <ArrowForwardIosIcon sx={{fontSize: "36px"}} onClick={() => handleForwardClick()}/>
        </Tab>
    );
}

export default Continuation;