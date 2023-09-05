import axios from "axios";
import { getToken } from "./auth";

const url = process.env.REACT_APP_VERSION === "true" ? process.env.REACT_APP_API_BACK_END : "https://apitag.azurewebsites.net/";

const api = axios.create({
  baseURL: url
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
