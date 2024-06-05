import { Outlet } from "react-router-dom";
import DashNav from "./DashNav";
import Footer from '../../shared/Footer'
const Dashboard = () => {
  return (
    <div>
      <DashNav></DashNav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;