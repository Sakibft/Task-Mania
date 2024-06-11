 
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
const {data:userData, refetch } = useQuery({
  queryFn:async() =>{
   const usrData = await axiosSecure.get(`/user/${currentUser}`)
   return usrData.data;
  },
  queryKey:['userData', 'user',currentUser,],
  enabled:!!token && !currentUser  
}) 
 
 
  return  [userData,refetch] ;
 };

export default useUsersData;