 
import useAxionPublic from './useAxionPublic';
import { AuthenticationContext } from '../providers/ContextComponent';
import { useContext, useEffect, useState } from 'react';

const useUsersData = () => {
  const { user } = useContext(AuthenticationContext);
  const axiosPublic = useAxionPublic();
  const [userData, setUserData] = useState();
  const currentUser = user?.email;
  useEffect(() => {
    if (currentUser) {
      axiosPublic
        .get(`/user/${currentUser}`)
        .then((res) => {
          setUserData(res.data);
          // console.log(res.data, "nav e data ");
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [currentUser]);
 
  return  userData ;
 };

export default useUsersData;