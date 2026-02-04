import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between px-8 py-4 bg-pink-900 mb-10 text-white">
      <h2>Navbar</h2>
      <input className="border border-white" type="text" />
      <div className="flex gap-8">
        <Link to="/">Home</Link>
        {/* when clicked on any navlink it will be highlighted */}
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "red" : "white",
          })}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "red" : "white",
          })}
          to="/product"
        >
          Product
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "red" : "white",
          })}
            to="/course"
        >
          Course
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
