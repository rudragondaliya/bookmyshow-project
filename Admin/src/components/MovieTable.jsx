import React, { useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getMovie, deleteMovie } from "../features/movies/movieThunks";
import { useNavigate } from "react-router-dom";
import { setSelectedMovie } from "../features/movies/movieSlice";

const MovieTable = () => {
  const dispatch = useDispatch();
  const { movies = [] } = useSelector((state) => state.movies);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getMovie());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteMovie(id));
  };

  
  const handleEdit = (movie) => {
  dispatch(setSelectedMovie(movie));
  navigate("/movies")
};

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="fw-bold text-primary">🎬 Movie Management</h3>
      </div>

      <div className="shadow-sm p-3 rounded-4 border-0">
        <Table responsive striped bordered hover className="align-middle text-center">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Poster</th>
              <th>Banner</th>
              <th>Title</th>
              <th>Description</th>
              <th>Genre</th>
              <th>Category</th>
              <th>Language</th>
              <th>Duration</th>
              <th>Release Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {movies && movies.length > 0 ? (
              movies.map((movie, index) => (
                <tr key={movie._id || movie.id || index}>
                  <td>{index + 1}</td>
                  <td>
                    {movie.posterUrl ? (
                      <img
                        src={`http://localhost:8100${movie.posterUrl}`}
                        alt={movie.title}
                        width="120"
                        height="40"
                        className="rounded shadow-sm"
                        style={{ objectFit: "cover" }}
                      />
                    ) : (
                      "No Poster"
                    )}
                  </td>
                  <td>
                    {movie.bannerUrl ? (
                      <img
                        src={`http://localhost:8100${movie.bannerUrl}`}
                        alt={`${movie.title} Banner`}
                        width="100"
                        height="40"
                        className="rounded shadow-sm"
                        style={{ objectFit: "contain" }}
                      />
                    ) : (
                      "No Banner"
                    )}
                  </td>
                  <td className="fw-semibold">{movie.title}</td>
                  <td className="text-truncate" style={{ maxWidth: "200px" }}>
                    {movie.description}
                  </td>
                  <td>{movie.genre}</td>
                  <td>{movie.category || "-"}</td>
                  <td>{movie.language}</td>
                  <td>{movie.Duration} min</td>
                  <td>
                    {movie.ReleaseDate
                      ? new Date(movie.ReleaseDate).toLocaleDateString()
                      : ""}
                  </td>
                  <td>
                    <a
                      variant="warning"
                      size="sm"
                      className="me-2"
                      onClick={() => handleEdit(movie)}
                    >
                      <FaEdit />
                    </a>
                    <a
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(movie._id)}
                    >
                      <FaTrash /> 
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" className="text-center text-muted py-4">
                  No movies found. Please add some!
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default MovieTable;
