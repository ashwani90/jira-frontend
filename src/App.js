import React from 'react';
import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Header from './components/header/Header';
import StickyFooter from './components/footer/footer';

const Home = React.lazy(() => import('./containers/pages/Home'));
const Settings = React.lazy(() => import('./containers/pages/Settings'));
const Dashboard = React.lazy(() => import('./containers/portal/dashboard'));
const TaskScheduler = React.lazy(() => import('./containers/pages/TaskScheduler'))
const Table = React.lazy(() => import('./containers/pages/Table'))

function App() {
  return (
        <div>
          <Header />
          <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/task-scheduler' element={<TaskScheduler />} />
              <Route path='/table' element={<Table />} />
          </Routes>
<StickyFooter />
        </div>
    
  );
}

export default App;
