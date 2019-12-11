import axios from "axios";

const api = axios.create({
  baseURL: "http://sitedev/i4proportalapi/api"
});

export default api;
