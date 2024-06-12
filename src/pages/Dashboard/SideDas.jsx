import { NavLink } from "react-router-dom";
import useUsersData from "../../hooks/useUsersData";
 const SideDas = () => {
  const [userData] = useUsersData();
  return (
    <div>
       {/* dashboard */}
       <div className="w-64  bg-green-100">
        <ul className="menu">
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

        {
          userData?.category === "Task Creator" && (
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
                <NavLink to="/dashboard/paymentHistory">Payment history</NavLink>
              </li>
            </>
          )
        }
        {/* Admin */}
         {
            userData?.category === "Admin" && (
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
            )
          }
        </ul>
      </div>
    </div>
  );
 };
 
 export default SideDas;