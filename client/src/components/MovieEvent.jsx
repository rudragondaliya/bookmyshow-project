import React from 'react';
import { Link } from 'react-router';

const MovieEvent = ({movie}) => {
  return (
    <>
      <div className="events-img py-2">
         <Link to={`/movie/${movie._id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <img src={`http://localhost:8100${movie.posterUrl}`} alt={movie.title} height={200} />
        </Link>
      </div>
    </>
  );
}

export default MovieEvent;
