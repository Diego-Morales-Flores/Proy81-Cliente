import Axios from "axios";
import { REACT_APP_BACKEND_URL } from "../config/constants";
/* Axios.defaults.baseURL =REACT_APP_BACKEND_URL; */

Axios.interceptors.request.use(
  (config) => {
    /* const token = window.localStorage.getItem('token') */
    /* if (token && config.headers)
      config.headers.Authorization = 'Bearer ' + token */
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)


export default Axios;