import React from "react";
import Sidenav from "../components/Sidenav";
import NavMenu from "../components/NavMenu";

const Dashboard = () => {
  return (
    <div className="flex h-full">
      <Sidenav />
      <div>
        <NavMenu />
        <div className="bg-[#dce9fa]">
            
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
