import { Outlet } from "react-router-dom";
import DashNav from "./DashNav";
import Footer from "../../shared/Footer";
import SideDas from "./SideDas";
const Dashboard = () => {
  return (
    <div>
      <DashNav></DashNav>

      <div className="md:flex container mx-auto  min-h-[calc(100vh-320px)]  ">
      <div>
      <SideDas></SideDas>
      </div>
        <div className="flex-1  ">
          <Outlet></Outlet>
        </div> 
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
