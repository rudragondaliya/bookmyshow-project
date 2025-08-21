const movies = require("../models/Movie");

exports.getMovie = async (req, res) => {
  try {
    const allMovies = await movies.find();
    res.json(allMovies);
  } catch (error) {
    console.log(error.message);
    
  }
};

exports.getMovieById = async (req, res) => {
  try {
    const movie = await movies.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.json(movie);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};


exports.addMovie = async (req, res) => {
  try {
    const { title, description, ReleaseDate, genre, category, Duration, language } = req.body;

    const newMovie = new movies({
      title,
      description,
      ReleaseDate,
      genre,
      category,
      Duration,
      language,
      posterUrl: req.files.posterUrl ? `/uploads/${req.files.posterUrl[0].filename}` : null,
      bannerUrl: req.files.bannerUrl ? `/uploads/${req.files.bannerUrl[0].filename}` : null,
    });

    await newMovie.save();
    res.json(newMovie);
  } catch (error) {
    
    console.log(error.message);
    
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    const deleted = await movies.findByIdAndDelete(req.params.id);
    res.json(deleted);
  } catch (error) {
     console.log(error.message);
     
  }
};


exports.updateMovie = async (req, res) => {
  try {
    const updatedData = { ...req.body };

   
    if (req.files && req.files.posterUrl) {
      updatedData.posterUrl = `/uploads/${req.files.posterUrl[0].filename}`;
    }


    if (req.files && req.files.bannerUrl) {
      updatedData.bannerUrl = `/uploads/${req.files.bannerUrl[0].filename}`;
    }

    const updated = await movies.findByIdAndUpdate(req.params.id, updatedData, {
      new: true,
    });

    res.json(updated);
  } catch (error) {
     console.log(error.message);
     
  }
};
