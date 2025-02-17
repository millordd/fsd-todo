import axios from 'axios';

// import { getUserJwtToken } from '../capacitor';
import { BASE_URL } from '../config';

// export const instance = axios.create({
//   baseURL: BASE_URL,
// });

// let token = '';
// instance.interceptors.request.use(async (config) => {
//   ///const isProd = process.env.REACT_APP_NODE_ENV === 'production';
//   if (!token) {
//     const { userJwtToken } = await getUserJwtToken();
//     token = userJwtToken;
//   }
//   config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

// instance.interceptors.response.use((config) => {
//   return config;
// });


export const instance = axios.create({
  baseURL: BASE_URL,
});




instance.interceptors.request.use((config) => {

  return config;
});

instance.interceptors.response.use(
  (response) => response,

);
