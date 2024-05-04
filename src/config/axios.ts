import axios from "axios";




export const axiosProject = axios.create({
  baseURL: import.meta.env.VITE_API
})



