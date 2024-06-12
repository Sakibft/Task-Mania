 
import { AuthenticationContext } from '../providers/ContextComponent';
import { useContext,  } from 'react';
import {  useQuery } from "@tanstack/react-query";
import useAxiosSecure from './useAxiosSecure';
 

const useUsersData = () => {
  const { user } = useContext(AuthenticationContext);
  // const axiosPublic = useAxionPublic();
  const axiosSecure = useAxiosSecure();
   
  const currentUser = user?.email;
   const token = localStorage.getItem('access-token')  
  //  console.log(!!currentUser,!!token);
const {data:userData, refetch } = useQuery({
  queryFn:async() =>{
 
   const userData = await axiosSecure.get(`/user/${currentUser}`)
   console.log(userData.data,'inside the useUserData');
   return userData.data;
  },
  queryKey:['userData', 'user',currentUser],
  enabled:!!token && !!currentUser  
}) 
 
 console.log(userData);
  return  [userData,refetch] ;
 };

export default useUsersData;