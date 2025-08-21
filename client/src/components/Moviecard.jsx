import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="card h-100 border-0 mt-3" style={{ width: "16em" }}>
      <Link to={`/movie/${movie._id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <img
        src={`http://localhost:8100${movie.posterUrl}`}
        className="card-img-top"
        alt={movie.title}
        style={{ height: "300px",objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">
          {movie.language} | {movie.genre}
        </p>
      </div>
      </Link>
    </div>
  );
};

export default MovieCard;
