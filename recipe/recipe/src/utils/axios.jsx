import axios from "axios";

const instance = axios.create({
  baseURL: "https://fakestoreapi.com/",
  // withCredentials: true
});

// Request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log("Request sent:", config.url);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any 2xx status code
    console.log("Response received:", response.status);
    return response;
  },
  function (error) {
    // Any non-2xx status code
    console.error("Response error:", error);
    return Promise.reject(error);
  }
);

export default instance;