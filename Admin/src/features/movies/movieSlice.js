// import { createSlice } from "@reduxjs/toolkit";
// import { addMovie, deleteMovie, getMovie, updateMovie } from "./movieThunks";

// const initialState = {
//     movies:[],
//     loading:false,
//     error:false
// }

// const movieSlice = createSlice({
//     name:"Movies",
//     initialState,
//     reducers:[],
//     extraReducers:(builder)=>{
// // get movie

//         builder.addCase(getMovie.pending,(state)=>{
//             state.loading = true,
//             state.error = false;
//         })

//         builder.addCase(getMovie.fulfilled,(state,action)=>{
//             state.loading = false,
//             state.movies = action.payload;
//         })

//         builder.addCase(getMovie.rejected,(state,action)=>{
//             state.loading = false;
//             state.error = action.error.message;
//         })

//         // add movie

//         builder.addCase(addMovie.pending,(state)=>{
//             state.loading = true,
//             state.error = false;
//         })

//         builder.addCase(addMovie.fulfilled,(state,action)=>{
//             state.loading = false,
//             state.movies.push(action.payload)
//         })

//         builder.addCase(addMovie.rejected,(state,action)=>{
//             state.loading = false;
//             state.error = action.error.message;
//         })

//         // delete movie

//         builder.addCase(deleteMovie.pending,(state)=>{
//             state.loading = true,
//             state.error = false;
//         })

//         builder.addCase(deleteMovie.fulfilled,(state,action)=>{
//             state.loading = false,
//             state.movies = state.movies.filter((m=> m._id !== action.payload))
//         })

//         builder.addCase(deleteMovie.rejected,(state,action)=>{
//             state.loading = false;
//             state.error = action.error.message;
//         })

//         // update movie

//         builder.addCase(updateMovie.pending,(state)=>{
//             state.loading = true,
//             state.error = false;
//         })

//         builder.addCase(updateMovie.fulfilled,(state,action)=>{
//             state.loading = false,
//             state.movies = state.movies.map((val)=>{
//                 if(val._id === action.payload._id){
//                     return action.payload
//                 }
//                 else
//                 {
//                     return val
//                 }
//             })
//         })

//         builder.addCase(updateMovie.rejected,(state,action)=>{
//             state.loading = false;
//             state.error = action.error.message;
//         })
//     }
// })

// export default  movieSlice.reducer

import { createSlice } from "@reduxjs/toolkit";
import { addMovie, getMovie, deleteMovie, updateMovie } from "./movieThunks";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    selectedMovie: null,
  },
  reducers: {
    setSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
    clearSelectedMovie: (state) => {
      state.selectedMovie = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovie.fulfilled, (state, action) => {
        state.movies = action.payload;
      })
      .addCase(addMovie.fulfilled, (state, action) => {
        state.movies.push(action.payload);
      })
      .addCase(deleteMovie.fulfilled, (state, action) => {
        state.movies = state.movies.filter((m) => m._id !== action.payload);
      })
      // .addCase(updateMovie.fulfilled, (state, action) => {
      //   const index = state.movies.findIndex((m) => m._id === action.payload._id);
      //   if (index !== -1) state.movies[index] = action.payload;
      // });

      .addCase(updateMovie.fulfilled, (state, action) => {
  const updated = action.payload;
  const index = state.movies.findIndex(m => m._id === updated._id);
  if (index !== -1) {
    state.movies[index] = updated; 
  }
})

  },
});

export const { setSelectedMovie, clearSelectedMovie } = movieSlice.actions;
export default movieSlice.reducer;
