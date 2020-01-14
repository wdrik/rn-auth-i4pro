import axios from 'axios';

import { getToken } from './auth';

const api = axios.create({
  baseURL: 'http://sitedev/i4proportalapi/api'
});

api.interceptors.request.use(async config => {
  const token = await getToken();

  if (token) config.headers.Authorization = `Bearer ${token}`;

  config.headers.id_portal = 7;

  return config;
});

export default api;
