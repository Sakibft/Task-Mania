import { createBrowserRouter } from "react-router-dom";
import Layouts from "../layouts/Layouts";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    errorElement: <h1> Page is not found </h1>,
    children:[
      {
        path: '/j',
        element: <h1>haha</h1>
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
]);

export default router ;