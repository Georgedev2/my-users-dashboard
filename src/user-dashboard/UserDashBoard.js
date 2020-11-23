import "./user-dasboard.css";
//import { useState } from "react";
import DashboardSideBar from "./dashboard-side-bar/DashboardSideBar";
import DashboardBody from "./dashboard-body/DashboardBody";

const UserDashBoard = () => {
  return (
    <div>
      <DashboardSideBar />
      <div>
        <div className="main-page">
          <div className="topbar"></div>
          <DashboardBody />
        </div>
      </div>
    </div>
  );
};

export default UserDashBoard;
