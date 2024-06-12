import axios from "axios";
import useAuth from "./useAuth";

 
const axiosSecure = axios.create({
  baseURL:import.meta.env.VITE_API_URL
});
// console.log(axiosSecure,'axiossecure');
const useAxiosSecure = () => {
  const {logOut}=useAuth();
  // request interceptor to add authorization header for every secure call to the apo
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem('access-token')
      console.log('request stopped by interceptors',token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    });
//intercepts 401, and 403 status
  axiosSecure.interceptors.response.use(function(response){
    return response;
  },(error)=>{
    const status = error.response.status;
    console.log('status error in the interceptors ', status);
    if(status === 401 || status === 403){
     logOut(); 
    }
  })


  return axiosSecure;
};

export default useAxiosSecure;