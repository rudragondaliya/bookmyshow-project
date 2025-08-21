import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = "http://localhost:8100/api/movies"

export const getMovie = createAsyncThunk("getMovie/movies",async(_,{rejectWithValue})=>{
    try {
        const response = await axios.get(api);
        const data = response.data
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})


export const addMovie = createAsyncThunk(
  "addMovie/movies",
  async (movieFormData, { rejectWithValue }) => {
    try {
      const response = await axios.post(api, movieFormData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const deleteMovie = createAsyncThunk("deleteMovie/movies",async(id,{rejectWithValue})=>{
    try {
        const response = await axios.delete(`${api}/${id}`);
        const data = response.data;
        return id;
    } catch (error) {
         return rejectWithValue(error.message)
    }
})


export const updateMovie = createAsyncThunk(
  "movies/updateMovie",
  async ({ id, movieFormData }) => {
    const response = await axios.put(`${api}/${id}`, movieFormData, {
      headers: { "Content-Type": "multipart/form-data" }, // important!
    });
    return response.data; 
  }
);
