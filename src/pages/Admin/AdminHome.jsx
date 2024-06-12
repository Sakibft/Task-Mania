import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

 
const AdminHome = () => {
  const axiosSecure = useAxiosSecure();
 const {data} = useQuery({
  queryFn:async()=>{
    const userData = await axiosSecure.get('/user')
    // console.log(userData.data);
    return userData.data;
  }
 })
 console.log(data);
  return (
    <div>
      <div>
        <h1>Total user : {data?.length + 1 }</h1>
      </div>
    </div>
  );
};

export default AdminHome;