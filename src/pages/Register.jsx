import { useContext, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { AuthenticationContext } from "../providers/ContextComponent";
// import axios from "axios";
import useAxionPublic from "../hooks/useAxionPublic";
import axios from "axios";

const Register = () => {
  console.log(import.meta.env.VITE_API_URL, "jaasdlldfglk");
  const axiosPublic = useAxionPublic();
  // const axiosPublic = useAxiosPublic();
  const { createUser, updateUserProfile, loginWithGoogle } = useContext(
    AuthenticationContext
  );
  const navigate = useNavigate();
  // const [coin, setCoin] = useState();
  // console.log(coin);
  const handleRegister = (e) => {
    // setCoin();
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    const category = form.category.value;
    let coin 
    if (category === "Worker") {
      coin=(10);
    } else if (category === "Task Creator") {
      coin=(50);
    }

    // console.log(name,email,password,photo ,category,'hahah');
    const userInfo = {
      name,
      email,
      photo,
      category,
      coin,
    };
    console.log(userInfo);
    createUser(email, password, photo)
      .then((data) => {
        updateUserProfile(name, photo);
        console.log(data);

        axiosPublic.post("/user", userInfo).then((res) => {
          console.log(res.data, "user added to the database");
        });
        navigate("/");
        console.log(data);
      })
      .catch((error) => console.log(error));
  };
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        const category = "Worker";
        const coin = 10;
        const userInfo = {
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
          category: category,
          coin: coin,
        };
        // console.log(userInfo);
        axiosPublic.post("/user", userInfo).then((res) => {
          console.log(res.data);
        });
        console.log(result.user.email);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="  container w-1/2 p-8 space-y-3 rounded-xl border bg-white   font-sans mx-auto">
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
              <option>Select a role</option>
              <option value="Worker">Worker</option>
              <option value="Task Creator">Task Creator</option>
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
        <div className="btn mx-auto w-full mb-2 flex justify-center items-center ">
          <button
            onClick={handleGoogleLogin}
            aria-label="Log in with Google"
            className="p-3 rounded-full hover:bg-gray-200 flex justify-center border "
          >
            google
          </button>
        </div>
        <p className="text-sm text-center gap-2 flex justify-center sm:px-6 ">
          Don&apos;t have an account?
          <Link
            to="/login"
            href="#"
            className="underline hover:text-indigo-600"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
