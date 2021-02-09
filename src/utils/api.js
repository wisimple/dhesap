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
          store.dispatch(setAppLoading(false));
          resolve(res);
        }, 400);
      });
    } else {
      store.dispatch(setAppLoading(false));
      return res;
    }
  },
  (err) => {
    console.log("error occured");
    throw err;
  }
);

api.interceptors.request.use(
  (req) => {
    store.dispatch(setAppLoading(true));

    return req;
  },
  (err) => {
    console.log("sss");
    throw err;
  }
);

export default api;
