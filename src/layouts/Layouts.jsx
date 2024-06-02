import { Outlet } from "react-router-dom";
import Nav from "../shared/Nav";

const Layouts = () => {
  return (
    <div>
      <div className="">
        <Nav></Nav>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Layouts;
