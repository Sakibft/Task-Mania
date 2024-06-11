import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

 

const Private = ({children}) => {
  const {user,loading} = useAuth();
  if(loading){
    return <h1 className="flex justify-center items-center">loading..........</h1>
  }
    if(user){
      return children;
    }
    return  <Navigate to='/login'></Navigate>
};

export default Private;