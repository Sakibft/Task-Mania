import { useState } from "react";
import toast from "react-hot-toast";

import { IoMdEye, IoMdEyeOff } from "react-icons/io";

import { Link } from "react-router-dom";
// import UseAuth from "../../hooks/UseAuth";
import useAuth from "../hooks/useAuth";
import useAxionPublic from "../hooks/useAxionPublic";
const Login = () => {
  const { loginUser, loginWithGoogle } = useAuth();
  const axiosPublic = useAxionPublic();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  if (error) {
    toast.error(error);
  }
  if (success) {
    toast.success("Successfully Login !");
  }

  const handleLogin = (e) => {
    // login
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    setError("");
    setSuccess("");
    loginUser(email, password)
      .then((result) => {
        setSuccess("success");
        console.log(result);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleGoogle = () => {
    loginWithGoogle()
      .then((result) => {
        const category = 'Worker';
        const coin = 10 ;
        const userInfo = {
          name:result.user.displayName,email:result.user.email,photo:result.user.photoURL,category:category,coin: coin
        }
        axiosPublic.post('/user',userInfo)
        .then(res => {
          console.log(res.data);
        })





        
        console.log(result);
        toast.success("Successfully login with google");
      })
      .catch((error) => {
        toast.error(error);        
      });
  };

  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="container mx-auto flex  h-[700px] items-center justify-center mb-10 mt-4  duration-2000   rounded-2xl shadow-xl "
      >
        <div className=" w-full overflow-hidden rounded-xl   flex justify-center items-center   lg:h-[80%] ">
          {/* input side  */}
          <div className="flex w-full flex-col justify-center bg-white py-10 lg:w-[60%]">
            <h2
              data-aos="fade-up"
              data-aos-duration="2000"
              className="pb-8 text-center text-3xl font-bold text-black"
            >
              Login Now !
            </h2>
            <form
              onSubmit={handleLogin}
              className="flex  w-full flex-col items-center justify-center gap-4"
            >
              <input
                className="w-[80%] rounded-lg border border-black px-6 py-2 focus:outline-none focus:ring-2  md:w-[60%]"
                type="email"
                placeholder="Email"
                name="email"
              />
              <div className="w-[80%] rounded-lg border border-black px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%] flex justify-between">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                />
                <div>
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="z-10   "
                  >
                    {showPassword ? (
                      <IoMdEye
                        className="
                text-gray-500 text-lg mt-1"
                      />
                    ) : (
                      <IoMdEyeOff
                        className="
                text-gray-500 text-lg mt-1"
                      />
                    )}
                  </span>
                </div>
              </div>

              <p className="text-[14px] text-gray-400">
                Do not have an account ?
                <Link to="/register" className="text-black underline ml-1  ">
                  Register
                </Link>
              </p>

              <button className="btn w-[80%] rounded-lg border-black px-6 py-2 font-medium text-black md:w-[60%] text-xl">
                Login
              </button>
            </form>
          
            {/* divider  */}
            <div className="my-8 flex items-center px-8">
              <hr className="flex-1" />
              <div className="mx-4 text-gray-400">OR</div>
              <hr className="flex-1" />
            </div>

            {/* sign with google */}
            <div
              onClick={handleGoogle}
              className="mx-auto flex h-[50px] w-[200px] items-center overflow-hidden rounded-full shadow-md duration-300 hover:scale-95 hover:shadow"
            >
              <div className="flex h-full w-[50%] items-center bg-gray-300 pl-4 text-sm text-white">
                Sign With
              </div>
              <span className="right-0 top-0 h-0 w-0 -rotate-90 border-b-[50px] border-r-[50px] border-b-transparent border-r-gray-300 group-hover:hidden"></span>
              <span className="pr-4 text-4xl bg-gray-50 font-bold text-black">G+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
