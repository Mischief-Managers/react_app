import { useState } from "react";
import { Link } from "react-router-dom";

import "../assets/css/SideBar.css";

const Sidebar: any = () => {
  const [isItemOpen_1, setIsItemOpen_1] = useState(true);

  const [isItemOpen_2, setIsItemOpen_2] = useState(true);

  const toggleItem_1 = () => {
    setIsItemOpen_1(!isItemOpen_1);
  };

  const toggleItem_2 = () => {
    setIsItemOpen_2(!isItemOpen_2);
  };


  return (
    <div className="sidebar open">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="sidebar-header">
          <h2>Inventory Analysis</h2>
        </div>
      </Link>

      <ul className="sidebar-main-menu">
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <li>Dashboard</li>
        </Link>

        <li onClick={toggleItem_1}>
          Analysis
          <span
            className={`arrow ${isItemOpen_1 ? "arrow-closed" : "arrow-open"}`}
          >
            &#9654;
          </span>
        </li>

        {isItemOpen_1 && (
          <ul className="sub-menu">
            <Link
              to="/analysis/listshow"
              style={{ textDecoration: "none" }}
            >
              <li>Inventory List</li>
            </Link>

            <Link
              to="/analysis/reportgen"
              style={{ textDecoration: "none" }}
            >
              <li>Report Generation</li>
            </Link>
            
            <Link
              to="/analysis/bmi_model"
              style={{ textDecoration: "none" }}
            >
              <li>BIM 3D Models</li>
            </Link>
          </ul>
        )}

        <li onClick={toggleItem_2}>
          ML Models
          <span
            className={`arrow ${isItemOpen_2 ? "arrow-closed" : "arrow-open"}`}
          >
            &#9654;
          </span>
        </li>

        {isItemOpen_2 && (

          <ul className="sub-menu">
            <Link
              to="/analysis/conversational_llms"
              style={{ textDecoration: "none" }}
            >
              <li>Conversational LLM</li>
            </Link>
          </ul>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
