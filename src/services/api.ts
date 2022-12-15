import axios from "axios";

const instance = axios.create({
  baseURL: "https://api-arya.hinovaconecta.com.br/",
});

const api = {
  instance,
};

export default api;
