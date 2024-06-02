import { useContext } from "react";

import {  Link, useNavigate } from "react-router-dom";
 
import { AuthenticationContext } from "../providers/ContextComponent";
import { fromJSON } from "postcss";

const Register = () => {
  // const axiosPublic = useAxiosPublic();
  const {createUser,AddNameAndPhoto, loginWithGoogle}=useContext(AuthenticationContext)
  const navigate = useNavigate();
 
  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
     const category = form.category.value;
    console.log(name,email,password,photo ,category,'hahah');
    createUser(email,password, photo)
    .then(data => {
      AddNameAndPhoto(name,photo)
      // axiosPublic.post('/users',userInfo )
      // .then(res => {
      //   console.log(res, "user added to the database");
      // })
      navigate('/')
      console.log(data)
    })
    .catch((error)=> console.log(error))
 
  }
  const handleGoogleLogin = () => {
    loginWithGoogle()
    .then(result => {
      console.log(result.user);
    })
    .catch(error => {
      console.log(error);
    })
  }
  return (
    <div>
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl border bg-white   font-sans mx-auto">
        <h1 className="text-3xl font-bold text-center text-indigo-600">
          Register
        </h1>
        {/* Input fields and the form started */}
        <form onSubmit={handleRegister} className="space-y-6">
          <div className="space-y-2 text-sm">
            <label htmlFor="username" className="block ">
              Your name
            </label>
            <input
              type="text"
              name="name"
          
              placeholder="Username"
              className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
            />
          </div>
          <div className="space-y-2 text-sm">
            <label htmlFor="username" className="block ">
              Email
            </label>
            <input
              type="email"
              name="email"
         
              placeholder="email"
              className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
            />
          </div>
          <div className="space-y-2 text-sm">
            <label htmlFor="password" className="block ">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
            />
            <label htmlFor="password" className="block ">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo"
              className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
            />
               <select
                name="category"
                className="p-4 rounded-lg border-l border-r border-primary shadow-blue-200 shadow-lg 
              focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300"
              >
               <option value="Technology">Select a role</option>
                <option value="worker">Worker</option>
                <option value="taskCreator">TaskCreator</option>
               </select>
            <div className="flex justify-end text-xs ">
              <a href="#" className="hover:underline">
                Forgot Password?
              </a>
            </div>
          </div>
          {/* Sign in Button */}
          <button className="text-lg rounded-xl relative p-[10px] block w-full bg-indigo-600 text-white border-y-4 duration-500 overflow-hidden focus:border-indigo-500 z-50 group">
            Log In
            <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">
              Let&apos;s go
            </span>
            <span className="bg-indigo-800 absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
            <span className="bg-indigo-800 absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
            <span className="bg-indigo-800 absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
            <span className="bg-indigo-800 absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-2">
          <div className="flex-1 h-px bg-gray-300"></div>
          <p className="text-sm text-gray-600">Login with social accounts</p>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>
        {/* Social icons */}
        <div  className="btn mx-auto w-full mb-2 flex justify-center items-center ">
           
           <button
           onClick={handleGoogleLogin}
             aria-label="Log in with Google"
             className="p-3 rounded-full hover:bg-gray-200 flex justify-center border "
           >
             <svg
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 32 32"
               className="w-5 h-5 fill-current"
             >
               <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
             </svg>
           </button>
          
          
         </div>
        <p className="text-sm text-center gap-2 flex justify-center sm:px-6 ">
          Don&apos;t have an account?
          <Link to='/login' href="#" className="underline hover:text-indigo-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
