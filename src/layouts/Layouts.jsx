import { Outlet } from "react-router-dom";
import Nav from "../shared/Nav";

 

const Layouts = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  );
};

export default Layouts;