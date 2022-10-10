import React from 'react';
import './App.css';
import Home from "./containers/pages/Home";
import Settings from './containers/pages/Settings';
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
        <div>
          <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
    
  );
}

export default App;
