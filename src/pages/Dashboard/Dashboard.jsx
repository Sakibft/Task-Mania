import { Outlet } from "react-router-dom";
import DashNav from "./DashNav";

const Dashboard = () => {
  return (
    <div>
      <DashNav></DashNav>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;