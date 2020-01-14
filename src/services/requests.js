import api from './api';

export const sendUsername = userName => api.post('Accounts/login', { userName });

export const auth = (password, guid) => api.post('Accounts/password', { password, guid });

export const getProfile = () => api.get('Accounts/profile');

export const logoff = token => api.post('Accounts/logoff', { accessToken: token });

export const getRulesPassword = () => api.get(`Administration/settingsApplication/getRulesPassword`);
