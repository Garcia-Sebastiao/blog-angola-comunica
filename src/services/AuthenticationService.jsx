import { api } from "./api";

export const login = (values) => {
  
};

export const storeToken = (token) => {
  localStorage.setItem("token", token);
};

export const getToken = () => {
  return localStorage.getItem("token");
};
