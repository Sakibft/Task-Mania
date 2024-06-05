import { useContext } from "react";
import  { AuthenticationContext } from "../providers/ContextComponent";

 

const useAuth = () => {
  const all = useContext(AuthenticationContext)
 
  return all ;
};

export default useAuth;