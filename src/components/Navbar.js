import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar" >
      <ul>
        <li>
          <NavLink 
            className="link"
            to="/"
            style={{ textDecoration: "none", color: "rgb(240, 244, 244)", fontFamily:"poppins" }}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            className="link"
            to="/project"
            style={{ textDecoration: "none", color: "rgb(240, 244, 244)", fontFamily:"poppins" }}
          >
            My Projects
          </NavLink>
        </li>

        <li>
          <NavLink
            className="link"
            to="/contact"
            style={{ textDecoration: "none", color: "rgb(240, 244, 244)", fontFamily:"poppins" }}
          >
            Contact Me
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
