import React from "react";

import { Link } from "react-router-dom";

import navImg from "../../assets/nav.png";

import "./navbar.style.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <h1>News App</h1>
      <img src={navImg} alt="" />
      <ul className="list">
        <Link to="/">
          <li className="search-item">Search</li>
        </Link>
        <Link to="/tech">
          <li className="tech-item">Tech</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
