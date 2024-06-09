 
import useAxionPublic from './useAxionPublic';
import { AuthenticationContext } from '../providers/ContextComponent';
import { useContext,  } from 'react';
import {  useQuery } from "@tanstack/react-query";

const useUsersData = () => {
  const { user } = useContext(AuthenticationContext);
  const axiosPublic = useAxionPublic();
   
  const currentUser = user?.email;

   
const {data:userData, refetch } = useQuery({
  queryFn:async() =>{
   const usrData = await axiosPublic.get(`/user/${currentUser}`)
   return usrData.data;
  },
  queryKey:['userData',currentUser]
}) 
 
 
  return  [userData,refetch] ;
 };

export default useUsersData;