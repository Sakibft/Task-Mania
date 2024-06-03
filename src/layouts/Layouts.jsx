import { Outlet } from "react-router-dom";
import Nav from "../shared/Nav";
import Footer from "../shared/Footer";

const Layouts = () => {
  return (
    <div>
         <Nav></Nav>
      
      <div>
        <Outlet></Outlet>
      </div>
       <Footer></Footer>
    </div>
  );
};

export default Layouts;
