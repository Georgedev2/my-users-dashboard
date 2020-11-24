import "./user-dasboard.css";
//import { useState } from "react";
import DashboardSideBar from "./dashboard-side-bar/DashboardSideBar";
import DashboardBody from "./dashboard-body/DashboardBody";

const UserDashBoard = () => {
  return (
    <div className="dashboard">
      <DashboardSideBar />
      <div>
        <div className="main-page">
          <div className="topbar"></div>
          <DashboardBody />
          <div className="burget-card_conatiner">
            <div className="burget-card">
              <div className="burget-card_title">
                <span>
                  <span>Annual Play Budget</span>
                  <span>Summary</span>
                </span>
                <span>
                  <span>This Year</span>
                  <span>X</span>
                </span>
              </div>

              <div className="burget-card_chart"></div>

              <div className="burget-card_bdy">
                <div>
                  <div>
                    <span>Total Play (NGN)</span>
                    <span>50,000,000</span>
                  </div>
                  <div>
                    <span>Total Play (NGN)</span>
                    <span>50,000,000</span>
                  </div>
                </div>

                <div>
                  <div>
                    <span>Total Play (NGN)</span>
                    <span>50,000,000</span>
                  </div>
                  <div>
                    <span>Total Play (NGN)</span>
                    <span>50,000,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashBoard;
