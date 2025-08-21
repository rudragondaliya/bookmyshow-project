import React from 'react';
import Home from './pages/Home';
import { Route, Routes } from 'react-router';
import MovieDetail from './pages/MovieDetail';
import Form from './components/Form';

const App = () => {
  return (
    <>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie/:id' element={<MovieDetail/>}/>
      </Routes>

    </>
  );
}

export default App;
