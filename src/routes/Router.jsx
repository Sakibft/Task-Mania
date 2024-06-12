import { createBrowserRouter } from "react-router-dom";
import Layouts from "../layouts/Layouts";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddTask from "../pages/TaskCreator/AddTask";
import MyTask from "../pages/TaskCreator/MyTask";
import Update from "../pages/TaskCreator/Update";
import PurchaseCoin from "../pages/TaskCreator/PurchaseCoin";
import PaymentForCoin from "../pages/TaskCreator/PaymentForCoin";
import PaymentHistory from "../pages/TaskCreator/PaymentHistory";
import TaskList from "../pages/Worker/TaskList";
import Details from "../pages/Worker/Details";
import WorkerSubmit from "../pages/Worker/WorkerSubmit";
import WorkerHome from "../pages/Worker/WorkerHome";
import TaskCreatorHome from "../pages/TaskCreator/TaskCreatorHome";
import ManageUser from "../pages/Admin/ManageUser";
import ManageTask from "../pages/Admin/ManageTask";
import Private from "./Private";
import Withdrawals from "../pages/Worker/Withdrawals";
import AdminHome from "../pages/Admin/AdminHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashBoard",
    element: <Private><Dashboard></Dashboard></Private>,
    errorElement: <Error></Error>,
    children: [
      // for task Creator
      {
        path: "taskCreatorHome",
        element: <TaskCreatorHome></TaskCreatorHome>,
      },
      {
        path: "addNewTasks",
        element: <AddTask></AddTask>,
      },
      {
        path: "myTasks",
        element: <MyTask></MyTask>,
      },
      {
        path: "update/:id",
        element: <Update></Update>,
      },
      {
        path: "purchaseCoin",
        element: <PurchaseCoin></PurchaseCoin>,
      },
      {
        path: "payment/:coin",
        element: <PaymentForCoin></PaymentForCoin>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      // for  worker
      {
        path: "workerHome",
        element: <WorkerHome></WorkerHome>,
      },
      {
        path: "tasklist",
        element: <TaskList></TaskList>,
      },
      {
        path: "details/:id",
        element: <Details></Details>,
      },
      {
        path: "submission",
        element: <WorkerSubmit></WorkerSubmit>,
      },
      {
        path:'withdrawals',
        element:<Withdrawals></Withdrawals>
      },
      // for Admin

      {
        path:'adminHome',
        element:<AdminHome></AdminHome>
      },
      {
        path:'mangeUsers',
        element:<ManageUser></ManageUser>
      },
      {
        path:'manageTask',
        element:<ManageTask></ManageTask>
      }
    ],
  },
]);

export default router;
