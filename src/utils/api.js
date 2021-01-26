import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
});

api.interceptors.response.use(
  (res) => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(res);
        }, 1250);
      });
    } else {
      return res;
    }
  },
  (err) => {
    console.log(err);
  }
);

export default api;
