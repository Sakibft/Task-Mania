// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAic_8FAPvXDO2DPvIaWr17WByQellYX5Q",
  authDomain: "taskmania-85588.firebaseapp.com",
  projectId: "taskmania-85588",
  storageBucket: "taskmania-85588.appspot.com",
  messagingSenderId: "1099452318600",
  appId: "1:1099452318600:web:6efb581ba31f638f5e703d",
  measurementId: "G-77JE7R6THQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;