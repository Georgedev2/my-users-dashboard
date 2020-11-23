import "./user-dasboard.css";
//import { useState } from "react";
//import PageLogo from "../page-logo/PageLogo";
//import searchImg from "./dashboard-imgs/search-img.png";
import DashboardSideBar from "./dashboard-side-bar/DashboardSideBar"

//import { sidebarData } from "./dashboardData";
//import img from "../user-dashboard/dashboard-imgs/manageUsers.png";

function UserDashBoard() {
  //const [menulist, setMenulist] = useState(sidebarData);

  return (
    <div>
      {/* <div className="sidebar">
        <div className="sidebar-logo">
          <PageLogo />
        </div>

        <div className="search-bar">
          <span></span>
          <input type="text" placeholder="Dashboard" />
        </div>

        <ul className="list-items">
          {menulist.map((item, i) => {
            return (
              <li key={i} className="list-item">
                <span>
                  <img src={item.img} className="list-item_img" />
                </span>
                <span className="list-item_title">{item.title}</span>
              </li>
            );
          })}
        </ul>

        <div className="manage-users">
          <span>
            <img src={img} />
          </span>
          <span>Manage Users</span>
        </div>
      </div> */}
      <DashboardSideBar/>
      <div className="topbar"></div>
      <div className="main-body"></div>
    </div>
  );
}

export default UserDashBoard;
