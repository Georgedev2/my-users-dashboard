import React, { useState } from "react";
import "./dashboard-body.css";
import {data} from "../dashboardData"

const DashboardBody = () => {
  const [cardDate] = useState(data);
  return (
    <div>
      <ul className="cards">
        {cardDate.map((el, i) => {
          return (
            <li key={i} className="card">
              <div>{el.title}</div>
              <div>{el.bdy}</div>
              <div>{el.btnTitle}</div>
              <div>
                <img />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DashboardBody;
