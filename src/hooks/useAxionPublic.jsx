import axios from "axios";

export const axiosPublic = axios.create({
  baseURL:import.meta.env.VITE_API_URL,
})
const useAxionPublic = () => {
  
      return  axiosPublic ;
   
};

export default useAxionPublic;