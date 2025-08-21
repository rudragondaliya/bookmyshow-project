import { createSlice } from "@reduxjs/toolkit";
import { adminLogin } from "./authThunks";


const initialState = {
     admin:null,
     error:false,
     loading:false,
}

const authSlice = createSlice({
    name:"adminAuth",
    initialState,
    reducers:{
        logoutAdmin: (state)=>{
            state.admin = null;
        }
    },
    extraReducers:(builder)=>{
       builder.addCase(adminLogin.pending,(state)=>{
        state.loading = true;
        state.error = false;
       })

       builder.addCase(adminLogin.fulfilled,(state,action)=>{
        state.loading = true;
        state.admin = action.payload;
       })
       builder.addCase(adminLogin.rejected,(state,action)=>{
        state.loading = false;
        state.error = action.error.message;
       })
    }
})

export const {logoutAdmin} = authSlice.actions
export default authSlice.reducer;