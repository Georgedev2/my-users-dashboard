import React, { useState } from "react";
import "./dashboard-body.css";
import { data } from "../dashboardData";

const DashboardBody = () => {
  const [cardDate] = useState(data);
  return (
    <div>
      <ul className="cards">
        {cardDate.map((el, i) => {
          return (
            <li key={i} className={`card ${el.cardBgColor}`}>
              <div className="card_title">{el.title}</div>
              <div className="card_text">{el.bdy}</div>
              <div className={`card_btn ${el.btnStyle}`}>{el.btnTitle}</div>

              <img src={el.img} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DashboardBody;
