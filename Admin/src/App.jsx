import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import { Route, Routes } from 'react-router-dom';
import Movies from './pages/Movies';
import Table from './pages/Table';

// import Cinemas from './pages/Cinemas';
// import Reviews from './pages/Reviews';
// import Bookings from './pages/Bookings';
// import Login from './pages/Login';

const App = () => {
  return (
    <div>
    {/* <Login/> */}

        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/moviestables' element={<Table/>}/>
         
        </Routes>
    </div>
  );
}

export default App;
