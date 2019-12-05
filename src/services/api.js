import axios from "axios";

const api = axios.create({
  baseURL: "http://sitedev/inshareApi/api/"
});

export default api;
