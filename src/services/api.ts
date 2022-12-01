import axios from "axios";
import LoginHelper from "../helpers/LoginHelper";

const instanceLogin = axios.create({
  baseURL: "https://api-arya.hinovaconecta.com.br/",
});

const instanceHeaders = axios.create({
  baseURL: "https://api-arya.hinovaconecta.com.br/",
});

instanceHeaders.interceptors.request.use(
  async (config) => {
    const data = await LoginHelper.getData();
    if (data?.token) {
      config.headers = config.headers ?? {};
      config.headers.Authorization = `Bearer ${data.token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const api = {
  instanceLogin,
  instanceHeaders,
};

export default api;
