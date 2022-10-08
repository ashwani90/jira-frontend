import React from 'react';
import './App.css';
import Home from "./containers/pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
    <Home />
    </>
    
  );
}

export default App;
