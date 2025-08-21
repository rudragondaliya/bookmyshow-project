import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

 export const adminLogin = createAsyncThunk("adminAuth/login",async(Credentials,{rejectWithValue})=>{
    try {
        const res = await axios.post("/admin/login",Credentials);
        return res.data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

