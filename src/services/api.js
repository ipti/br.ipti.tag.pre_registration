import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
    baseURL: "http://tag-api-loadbalance-772604107.us-east-1.elb.amazonaws.com:3000/"
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
