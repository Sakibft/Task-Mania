import { createBrowserRouter } from "react-router-dom";
import Layouts from "../layouts/Layouts";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddTask from "../pages/TaskCreator/AddTask";
import MyTask from "../pages/TaskCreator/MyTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    errorElement:<Error></Error>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  },
  {
    path:'dashBoard',
    element:<Dashboard></Dashboard>,
    errorElement:<Error></Error>,
    children:[
{
  path:'taskCreatorAddNewTasks',
  element:<AddTask></AddTask>
},
{
  path:'taskCreatorMyTasks',
  element:<MyTask></MyTask>
}
    ]
    
  }
]);

export default router ;