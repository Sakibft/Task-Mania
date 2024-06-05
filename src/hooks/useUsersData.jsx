 
// import useAxionPublic from './useAxionPublic';
// import { AuthenticationContext } from '../providers/ContextComponent';
// import { useContext, useState } from 'react';

// const useUsersData = () => {
//   const [userData,setUserData] = useState();
//   const {user} = useContext(AuthenticationContext)
//   const currentUser = user.email;
//  const axiosPublic = useAxionPublic();
//     // data get for navbar coin show 
//  axiosPublic.get(`/user/${currentUser}`)
// .then(res =>{
//   setUserData(res.data);
// })
// .catch(error => {
// setUserData(error)
// })
// console.log(userData,'inside the hooks');
//   return  [userData]
//  };

// export default useUsersData;