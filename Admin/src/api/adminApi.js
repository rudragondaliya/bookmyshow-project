import axios from "axios";

const adminApi = axios.create({
    baseURL:"http://localhost:8100/api/admin",
    headers:{
        "Content-Type":"application/json",
    }
})

export const adminLogin = async(Credentials)=>{
    const {data} = await adminApi.post("/login",Credentials)
    return data;
}

export const adminLogout = async(Credentials)=>{
    const {data} = await adminApi.post("/logout")
    return data;
}

export default adminApi;