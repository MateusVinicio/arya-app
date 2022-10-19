import axios from "axios";

const instance = axios.create({
  baseURL: "https://api-arya.hinovaconecta.com.br/",
});

export default instance;
