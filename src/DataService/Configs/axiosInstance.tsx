// import dependencies
import axios from "axios";
// import Cookies from "js-cookie";

// create a new instance of axios
const axiosInstance = axios.create({
  baseURL: "https://etokweb.etokco.ir/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Accept-Encoding": "gzip"

  },
});

// add a request interceptor
// axiosInstance.interceptors.request.use((config : any) => {
//   // add the token to the request headers
//   const token = Cookies.get("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   config.headers["Accept-Language"] = Cookies.get("lng") || "fa";
//   // console.log(Cookies.get("lng"));
//   return config;
// });

// export the axios instance
export default axiosInstance;
