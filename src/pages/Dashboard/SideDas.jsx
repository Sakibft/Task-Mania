import { NavLink } from "react-router-dom";
import useUsersData from "../../hooks/useUsersData";
const SideDas = () => {
  const [userData] = useUsersData();
  return (
    <div>
      {/* dashboard */}
      {/* sm nav */}
      <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={10} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {userData?.category === "Worker" && (
            <>
              <li>
                <NavLink to="/dashboard/workerHome">Home</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/tasklist">TaskList</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/submission">My Submissions</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/withdrawals">Withdrawals</NavLink>
              </li>
            </>
          )}
          {/* taskCreator */}

          {userData?.category === "Task Creator" && (
            <>
              <li>
                <NavLink to="/dashboard/taskCreatorHome">Home</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addNewTasks">Add new Tasks</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myTasks">My Tasks</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/purchaseCoin">Purchase Coin</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  Payment history
                </NavLink>
              </li>
            </>
          )}
          {/* Admin */}
          {userData?.category === "Admin" && (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">Home</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mangeUsers">Mange Users</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageTask">Manage Task</NavLink>
              </li>
            </>
          )}
      </ul>
    </div>
      {/* lg nav */}
      <div className="w-64  bg-green-100">
        <ul className="menu hidden md:flex">
          {/* worker */}
          {userData?.category === "Worker" && (
            <>
              <li>
                <NavLink to="/dashboard/workerHome">Home</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/tasklist">TaskList</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/submission">My Submissions</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/withdrawals">Withdrawals</NavLink>
              </li>
            </>
          )}
          {/* taskCreator */}

          {userData?.category === "Task Creator" && (
            <>
              <li>
                <NavLink to="/dashboard/taskCreatorHome">Home</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addNewTasks">Add new Tasks</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myTasks">My Tasks</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/purchaseCoin">Purchase Coin</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  Payment history
                </NavLink>
              </li>
            </>
          )}
          {/* Admin */}
          {userData?.category === "Admin" && (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">Home</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mangeUsers">Mange Users</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageTask">Manage Task</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SideDas;
