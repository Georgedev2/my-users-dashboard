import { useState } from "react";
import PageLogo from "../../page-logo/PageLogo";
import "./dashboard-side-bar.css";
import { sidebarData } from "../dashboardData";
import manageUsersImg from "../dashboard-imgs/manageUsers.png";

const DashboardSideBar = () => {
  const [menulist] = useState(sidebarData);

  return (
    <div className="sidebar">
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
          <img src={manageUsersImg} />
        </span>
        <span>Manage Users</span>
      </div>
    </div>
  );
};

export default DashboardSideBar;
