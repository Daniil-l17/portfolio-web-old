import axios from "axios";


export const axiosBaseGitHub = axios.create({
  baseURL: 'https://api.github.com'
})

export const axiosProject = axios.create({
  baseURL: 'https://65182940582f58d62d357491.mockapi.io'
})



