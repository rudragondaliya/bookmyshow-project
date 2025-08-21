import React from 'react';
import { Link } from 'react-router';

const MoviePremiere = ({movie}) => {
  return (
    <div>
      <div className=" text-white h-100 w-100 mt-3" style={{ width: "18em" }}>
        <Link to={`/movie/${movie._id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <img
        src={`http://localhost:8100${movie.posterUrl}`}
        className="card-img-top"
        alt={movie.title}
        style={{ height: "300px",objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title mt-3 ">{movie.title}</h5>
        <p className="card-text ">
          {movie.language} 
        </p>
   
      </div>
      </Link>
    </div>
    </div>
  );
}

export default MoviePremiere;
