import React from 'react';
import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";

const Home = React.lazy(() => import('./containers/pages/Home'));
const Settings = React.lazy(() => import('./containers/pages/Settings'));
const Dashboard = React.lazy(() => import('./containers/portal/dashboard'));

function App() {
  return (
        <div>
          <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </div>
    
  );
}

export default App;
