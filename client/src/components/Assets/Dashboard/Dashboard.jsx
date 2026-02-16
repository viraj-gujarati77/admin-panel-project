import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/"><input type="text" /></Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/contact"><img src="" alt="" /></Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Dashboard;
