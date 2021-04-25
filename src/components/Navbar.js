import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Chuck Norris facts
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
