import React from 'react';
import { Link } from 'react-router';

const MovieLaughter = ({ movie }) => {
  return (
    <div>
      <div className="card h-100 border-0 mt-3" style={{ width: "14rem" }}>
        <Link to={`/movie/${movie._id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <img
          src={`http://localhost:8100${movie.posterUrl}`}
          className="card-img-top"
          alt={movie.title}
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover", // use 'contain' if you prefer full image with spacing
          }}
        />
        <div className="card-body">
          <h5 className="card-title mt-1">{movie.title}</h5>
          <p className="card-text">{movie.description}</p>
        </div>
        </Link>
      </div>
      
    </div>
  );
};

export default MovieLaughter;
