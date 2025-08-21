import axios from "axios";

const axiosInstances = axios.create({
    baseURL:"http://localhost:8100/api",
})

export default axiosInstances;