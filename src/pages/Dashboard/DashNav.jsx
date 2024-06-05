import { useContext, useEffect, useState } from "react";
import { AuthenticationContext } from "../../providers/ContextComponent";
import useAxionPublic from "../../hooks/useAxionPublic";
import { Link, NavLink } from "react-router-dom";
const DashNav = () => {
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
          console.log(res.data, "nav e data ");
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [currentUser]);

  const coin = userData?.coin;
  const category = userData?.category;

  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <Link to='/' className="btn btn-ghost text-xl">Logo</Link>
        </div>
        {/* <div className="navbar-center hidden md"></div> */}

        <div className="navbar-end relative border space-x-5 ">
          <div>
            <h1>{coin}</h1>
            <h1>{category}</h1>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </div>
            <h1>{user?.displayName}</h1>
          </div>
          <button className="border rounded-md hover:bg-slate-300">
            <svg
              width="40px"
              viewBox="-4.32 -4.32 32.64 32.64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#0284C7"
            >
              <g strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#CCCCCC"
                strokeWidth="0.048"
              />
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M8.35179 20.2418C9.19288 21.311 10.5142 22 12 22C13.4858 22 14.8071 21.311 15.6482 20.2418C13.2264 20.57 10.7736 20.57 8.35179 20.2418Z"
                  fill="#38BDF8"
                />{" "}
                <path
                  d="M18.7491 9V9.7041C18.7491 10.5491 18.9903 11.3752 19.4422 12.0782L20.5496 13.8012C21.5612 15.3749 20.789 17.5139 19.0296 18.0116C14.4273 19.3134 9.57274 19.3134 4.97036 18.0116C3.21105 17.5139 2.43882 15.3749 3.45036 13.8012L4.5578 12.0782C5.00972 11.3752 5.25087 10.5491 5.25087 9.7041V9C5.25087 5.13401 8.27256 2 12 2C15.7274 2 18.7491 5.13401 18.7491 9Z"
                  fill="#38BDF8"
                />{" "}
              </g>
            </svg>
            <span className="absolute -right-2 -top-2 flex h-[24px] w-[24px] items-center justify-center rounded-full bg-red-500 text-center text-[12px] text-white ">
              12
            </span>
          </button>
        </div>
      </div>

      {/* dashboard */}
      <div className="w-64 min-h-[calc(100vh-290px)]  bg-green-100">
        <ul className="menu">
          {/* worker */}
          {userData?.category === "worker" && (
            <>
              <li>
                <NavLink to="/dashboard/workerHome">Home</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/workerTasklist">TaskList</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/workerSubmission">My Submissions</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/workerWithdrawals">Withdrawals</NavLink>
              </li>
            </>
          )}
          {/* taskCreator */}

        {
          userData?.category === "taskCreator" && (
            <>
             <li>
                <NavLink to="/dashboard/taskCreatorHome">Home</NavLink>
              </li>
             <li>
                <NavLink to="/dashboard/taskCreatorAddNewTasks">Add new Tasks</NavLink>
              </li>
             <li>
                <NavLink to="/dashboard/taskCreatorMyTasks">My Tasks</NavLink>
              </li>
             <li>
                <NavLink to="/dashboard/taskCreatorPurchaseCoin">Purchase Coin</NavLink>
              </li>
             <li>
                <NavLink to="/dashboard/taskCreatorPaymentHistory">Payment history</NavLink>
              </li>
            </>
          )
        }
        {/* Admin */}
         {
            userData?.category === "admin" && (
              <>
               <li>
                <NavLink to="/dashboard/adminHome">Home</NavLink>
              </li>
               <li>
                <NavLink to="/dashboard/adminMangeUsers">Mange Users</NavLink>
              </li>
               <li>
                <NavLink to="/dashboard/adminManageTask">Manage Task</NavLink>
              </li>
              </>
            )
          }
        </ul>
      </div>
    </div>
  );
};

export default DashNav;
