import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Orion
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/transactions">
            Transactions <span className="sr-only">(current)</span>
          </NavLink>
          <NavLink className="nav-item nav-link" to="/livelog">
            LiveLog
          </NavLink>
          <NavLink className="nav-item nav-link" to="/cmdb">
            CMDB
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
