import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkStyle =
    "relative px-4 py-2 font-medium transition-all duration-300 hover:text-red-400";

  return (
    <nav className="bg-gray-950 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-10 py-4">
        
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? "text-red-400" : ""}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/recipes"
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? "text-red-400" : ""}`
          }
        >
          Recipes
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? "text-red-400" : ""}`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/create-recipe"
          className={({ isActive }) =>
            `px-5 py-2 rounded-lg font-semibold transition-all duration-300 
             bg-red-500 hover:bg-red-600 hover:scale-105
             ${isActive ? "bg-red-700 scale-105" : ""}`
          }
        >
          Create
        </NavLink>

      </div>
    </nav>
  );
};

export default Navbar;
