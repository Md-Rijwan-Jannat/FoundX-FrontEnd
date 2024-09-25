import axios from "axios";
import envConfig from "@/src/config/envConfig";
import Cookies from "js-cookie";

const AxiosInstanceClient = axios.create({
  baseURL: envConfig.baseApi,
});

// Add a request interceptors
AxiosInstanceClient.interceptors.request.use(
  function (config) {
    const accessToken = Cookies.get("accessToken");

    if (accessToken) {
      config.headers.Authorization = accessToken;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

AxiosInstanceClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default AxiosInstanceClient;
