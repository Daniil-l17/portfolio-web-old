import axios from "axios";


export const axiosBaseGitHub = axios.create({
  baseURL: 'https://api.github.com'
})

