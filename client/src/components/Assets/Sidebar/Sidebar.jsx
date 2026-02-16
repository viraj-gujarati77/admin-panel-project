import React from "react";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";

import { useNavigate } from "react-router-dom";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const navigate = useNavigate();
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" /> SHOP
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item" onClick={() => navigate("/Home")}>
          <a href="/Home">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </a>
        </li>
        <li className="sidebar-list-item" onClick={() => navigate("/Products")}>
          <a href="/Products">
            <BsFillArchiveFill className="icon" /> Products
          </a>
        </li>
        <li
          className="sidebar-list-item"
          onClick={() => navigate("/Categories")}
        >
          <a href="/Categories">
            <BsFillGrid3X3GapFill className="icon" /> Categories
          </a>
        </li>
        <li
          className="sidebar-list-item"
          onClick={() => navigate("/Customers")}
        >
          <a href="/Customers">
            <BsPeopleFill className="icon" /> Customers
          </a>
        </li>
        <li
          className="sidebar-list-item"
          onClick={() => navigate("/Inventory")}
        >
          <a href="/Inventory">
            <BsListCheck className="icon" /> Inventory
          </a>
        </li>
        <li className="sidebar-list-item" onClick={() => navigate("/Reports")}>
          <a href="/Reports">
            <BsMenuButtonWideFill className="icon" /> Reports
          </a>
        </li>
        <li className="sidebar-list-item" onClick={() => navigate("/Setting")}>
          <a href="/Setting">  
            <BsFillGearFill className="icon" />
            Setting
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
