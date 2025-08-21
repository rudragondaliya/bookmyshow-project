import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, updateMovie } from "../features/movies/movieThunks";
import { clearSelectedMovie, setSelectedMovie } from "../features/movies/movieSlice";
import { useEffect } from "react";


const MovieForm = () => {
  const [movieForm, setMovieForm] = useState({});
  const { selectedMovie } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

 
useEffect(() => {
  if (selectedMovie) {
    setMovieForm({
      ...selectedMovie,
      ReleaseDate: formatDate(selectedMovie.ReleaseDate),
      posterUrl: selectedMovie.posterUrl || "",
      bannerUrl: selectedMovie.bannerUrl || ""
      
    });
  }
}, [selectedMovie]);


const formatDate = (dateString) => {
  if (!dateString) return "";
  return new Date(dateString).toISOString().split("T")[0]; // gives "1987-02-04"
};


  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files && files.length > 0) {
      setMovieForm({ ...movieForm, [name]: files[0] });
    } else {
      setMovieForm({ ...movieForm, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(movieForm).forEach((key) => {
      if (movieForm[key] !== null) formData.append(key, movieForm[key]);
    });

    if (movieForm._id) {
     dispatch(updateMovie({ id: movieForm._id, movieFormData: formData }));
   } else {
     dispatch(addMovie(formData));
     
}

    setMovieForm({});
    dispatch(clearSelectedMovie());
  };

  
  return (
    <div className="container-fluid">
      <h3 className="mb-4">Add Movies</h3>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-6 mb-3">
            <label>Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              value={movieForm?.title || ""}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-6 mb-3">
            <label>Genre</label>
            <select
              name="genre"        
              className="form-control"
              value={movieForm?.genre || ""}
              onChange={handleChange}
            >
              <option value="">-- Select Genre --</option>
              <option value="Action">Action</option>
              <option value="Comedy">Comedy</option>
              <option value="Drama">Drama</option>
              <option value="Thriller">Thriller</option>
              <option value="Sci-Fi">Sci-Fi</option>
            </select>
          </div>

         
          <div className="col-6 mb-3">
            <label>Category</label>
            <select
              name="category"
              className="form-control"
              value={movieForm?.category || ""}
              onChange={handleChange}
            >
              <option value="">-- Select Category --</option>
              <option value="recommended">recommended</option>
              <option value="Events">Events</option>
              <option value="premiere">premiere</option>
              <option value="Laughter">Laughter</option>
            </select>
          </div>


          <div className="col-6 mb-3">
            <label>Description</label>
            <textarea
              name="description"
              className="form-control"
              value={movieForm?.description || ""}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="col-6 mb-3">
            <label>Language</label>
            <select
              name="language"
              className="form-control"
              value={movieForm?.language || ""}
              onChange={handleChange}
            >
              <option value="">-- Select Language --</option>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Gujarati">Gujarati</option>
              <option value="Tamil">Tamil</option>
              <option value="Telugu">Telugu</option>
            </select>
          </div>

          <div className="col-6 mb-3">
            <label>Release Date</label>
            <input
              type="date"
              name="ReleaseDate"   
              className="form-control"
              value={movieForm?.ReleaseDate || ""}
              onChange={handleChange}
            />
          </div>

          <div className="col-6 mb-3">
            <label>Duration (mins)</label>
            <input
                type="number"
                name="Duration"     
                className="form-control"
                value={movieForm?.Duration || ""}
                onChange={handleChange}
              />
          </div>

          <div className="col-6 mb-3">
            <label>Poster</label>
            {selectedMovie && (
              <input
              type="text"
              name="posterUrlName"
              className="form-control"
              value={movieForm?.posterUrl?.name || movieForm?.posterUrl || ""}
              readOnly
            />
            )}
          
            <input
              type="file"
              name="posterUrl"
              className="form-control"
              onChange={handleChange}
            />
  
          </div>

          <div className="col-6 mb-3">
            <label>Banner</label>
             {selectedMovie && (
                <input
              type="text"
              name="posterUrlName"
              className="form-control"
              value={movieForm?.bannerUrl?.name || movieForm?.bannerUrl || ""}
              readOnly
            />
             )}
             
            <input
              type="file"
              name="bannerUrl"
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MovieForm;

