import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Nav = () => {
  return (
    <nav className="nav-bar">
      <h1>Italian Pizza</h1>

      <Link to="/" className="homelink">
       <li>Home</li>
      </Link>
    </nav>
  );
};

export default Nav;