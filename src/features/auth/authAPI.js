import axios from "axios";

const API = axios.create({baseURL: "https://mangaapi-g1f2.onrender.com/api/v1/"})

export const signUpAPI = (FormData) => API.post('/auth/register', FormData);
export const signInAPI = (FormData) => API.post('/auth/login', FormData);