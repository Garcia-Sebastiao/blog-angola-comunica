import { api } from "../../services/api";
import FormData from "form-data";

const form = new FormData();
const headers = form.headers;


export function setUserLocalStorage(user) {
  localStorage.setItem("visitor-token", JSON.stringify(user));
}

export function getUserLocalStorage() {
  const json = localStorage.getItem("visitor-token");

  if (!json) {
    return null;
  }

  const user = JSON.parse(json);

  return user ?? null;
}

export async function loginRequest(formData) {
  try {
    const request = await api.post("/blog/global/reader/login",  formData ,{
      headers:{
        ...headers
      }
    });
    return request.data;
  } catch (error) {
    return null;
  }
}
