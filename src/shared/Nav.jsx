import { useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import mony from '../../src/assets/money.png'
import useAxionPublic from "../hooks/useAxionPublic";
import { AuthenticationContext } from "../providers/ContextComponent";
 
const Nav = () => {
const axiosPublic = useAxionPublic();
  const { user, logOut } = useContext(AuthenticationContext);
  console.log(user, "inside the navbar");
  const [dropDownState, setDropDownState] = useState(false);
  const [coin,setCoin]=useState();
  const dropDownMenuRef = useRef();
const currentUser = user?.email;
console.log(currentUser);
  useEffect(() => {
    const closeDropDown = (e) => {
      if (!dropDownMenuRef?.current?.contains(e?.target)) {
        setDropDownState(false);
      }
    };
    document.addEventListener("mousedown", closeDropDown);
    return () => {
      document.removeEventListener("mousedown", closeDropDown);
    };
  }, []);
  // data get for navbar coin show 
axiosPublic.get(`/user/${currentUser}`)
.then(res =>{
setCoin(res.data.coin)
  console.log(res.data,'nav e data ');
})
.catch(error => {
  console.log(error);
})
  return (
    <div className=" w-full bg-opacity-80">
      <nav className="flex items-center justify-between bg-[#393E46] px-4 py-2 text-white">
        <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110 flex justify-center items-center gap-4">
         {
          user &&  <img
          className="w-12 rounded-full bg-slate-500 object-cover  duration-500"
          src={user?.photoURL}
          alt="user image "
        />
         }
          <Link to="/">
            <h2>TaskMania</h2>
          </Link>
        </div>
        {user && user ? (
          <ul className="hidden items-center justify-between gap-10 md:flex">
            <NavLink to="/dashboard">
              <li className="group flex  cursor-pointer flex-col">
                Dashboard
                <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            </NavLink>
            <NavLink to="/login">
              <li className="group flex  cursor-pointer flex-col">
                <div className="flex justify-center items-center ">
                <img className="w-12" src={mony} alt="" />
               <h1 className="font-bold text-2xl">{coin} </h1>
                </div>
               
                <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            </NavLink>

            <li
              onClick={logOut}
              className="group flex  cursor-pointer flex-col border rounded-xl p-1"
            >
              Logout
              
            </li>
          </ul>
        ) : (
          // not logged in user
          <ul className="hidden items-center justify-between gap-10 md:flex">
            <NavLink to="/">
              <li className="group flex  cursor-pointer flex-col">
                Watch demo
                <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            </NavLink>
            <NavLink to="/login">
              <li className="group flex  cursor-pointer flex-col">
                Login
                <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            </NavLink>
            <NavLink to="/register">
              <li className="group flex  cursor-pointer flex-col">
                Register
                <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            </NavLink>
          </ul>
        )}

        <div
          ref={dropDownMenuRef}
          onClick={() => setDropDownState(!dropDownState)}
          className="relative flex transition-transform md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="cursor-pointer"
          >
            {" "}
            <line x1="4" x2="20" y1="12" y2="12" />{" "}
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />{" "}
          </svg>
          {dropDownState && (
            <ul className=" z-10  gap-2  bg-[#393E46]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
              <NavLink to="/">
                <li className="group flex  cursor-pointer flex-col">
                  Watch demo
                  <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                </li>
              </NavLink>
              <NavLink to="/login">
                <li className="group flex  cursor-pointer flex-col">
                  Login
                  <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                </li>
              </NavLink>
              <NavLink to="/register">
                <li className="group flex  cursor-pointer flex-col">
                  Register
                  <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                </li>
              </NavLink>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
