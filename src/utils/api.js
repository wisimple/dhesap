import axios from "axios";
import { store } from "store";
import { setAppLoading } from "store/app/actions";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
});

api.interceptors.response.use(
  (res) => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(res);
        }, 400);
      });
    } else {
      return res;
    }
  },
  (err) => {
    store.dispatch(setAppLoading(false));
    throw err;
  }
);

api.interceptors.request.use((req) => {
  store.dispatch(setAppLoading(true));

  return req;
});

api.interceptors.response.use((res) => {
  store.dispatch(setAppLoading(false));

  return res;
});

export default api;
