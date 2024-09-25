import axios from "axios";
import { BASE_URL } from "../config";
export const $axios = axios.create({
  baseURL: BASE_URL,
  headers: {
    common: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  },
});

const responseHandler = (response) => {
  return response;
};

const errorHandler = (error) => {
  if (error.response) {
    if (error.response.status === 401) {
      localStorage.clear();
      window.location = "/login";
    }
    return Promise.reject(error.response.data);
  } else {
    return Promise.reject(error.message);
  }
};

$axios.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);
