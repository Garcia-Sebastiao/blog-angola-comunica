import axios from "axios";
import { getUserLocalStorage } from "../contexts/AuthProvider/util";

export const api = axios.create({
    baseURL: "https://apiblogdb.onrender.com",
});

const token = localStorage.getItem('token');

// if(token != null || token != false)
// {
//     api.defaults.headers.authorization =`Bearer ${token}`;
// } 