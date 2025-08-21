import React, { useEffect } from 'react';
import MovieTable from '../components/MovieTable';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMovie, getMovie } from '../features/movies/movieThunks';

const Table = () => {

  return (
    <>
      <div className="d-flex">
        <Sidebar/>
        <div className="flex-grow-1">
            <div className="main-pannel">
              <Navbar/>
              <div className="movie-form p-4">
               <MovieTable/>
              </div>
            </div>
        </div>
      </div>  
    </>
  );
}

export default Table;



