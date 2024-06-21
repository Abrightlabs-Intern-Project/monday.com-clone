import React from "react";
import { Link } from "react-router-dom";

const Linker = () => {
  return (
    <nav className="navbar navbar-dark bg-dark flex-column vh-100">
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/">
            Home
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link text-white" to="/work">
            Work
          </Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link text-white" to="/task">
            Task
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/sprint">
            Sprint
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Linker;
