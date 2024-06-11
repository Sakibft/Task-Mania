import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
// import auth from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
// import axios from "axios";
import auth from "../firebase/fConfig";
import useAxionPublic from "../hooks/useAxionPublic";
 

const Provider = new GoogleAuthProvider();
export const AuthenticationContext = createContext();

const ContextComponent = ({ children }) => {
  const axiosPublic = useAxionPublic();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(user);

  const createUser = (email, password) => {
    setLoading(true);

    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, Provider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unSubsCribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if(currentUser){
        // get token and store client
        const userInfo = {email: currentUser.email}
           axiosPublic.post('/jwt', userInfo)
           .then(res => {
            if(res.data.token){
              localStorage.setItem('access-token', res.data.token);
               setLoading(false)
            }
           })
            }else{
              // dodo : remove token (if token stored in the client side : local storage, caching, in memory)
           localStorage.removeItem('access-token');
        setLoading(false)
            }
    });
    return () => {
      unSubsCribe();
    };
  }, []);

  const info = {
    user,
    createUser,
    loginUser,

    loginWithGoogle,
    logOut,
    loading,
    updateUserProfile,
  };
  return (
    <AuthenticationContext.Provider value={info}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default ContextComponent;
