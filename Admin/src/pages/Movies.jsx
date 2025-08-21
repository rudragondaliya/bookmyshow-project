import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import MovieForm from '../components/MovieForm';

const Movies = () => {
  return (
    <>
     <div className="d-flex">
        <Sidebar/>
        <div className="flex-grow-1">
            <div className="main-pannel">
              <Navbar/>
              <div className="movie-form p-4">
                <MovieForm/>
              </div>
            </div>
        </div>
      </div> 
    </>
  );
}

export default Movies;
