import axios from "axios";

const api = axios.create({
  baseURL: "http://sitedev/i4proportalApi/api/"
});

export default api;
