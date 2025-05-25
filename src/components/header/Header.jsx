import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css"

const Header = () => {
  return (
   <header className="bg-gradient-to-r from-cyan-600 to-blue-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
        
        <div className="flex items-center gap-2 text-white">
          <div className="bg-white text-blue-700 font-extrabold text-xl w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
            D
          </div>
          <h1 className="text-2xl font-semibold tracking-wide">DummyJson</h1>
        </div>

        <nav className="flex flex-wrap items-center gap-4 mt-4 md:mt-0 text-sm md:text-base">
          <NavLink to="/" className="hover:text-yellow-300 transition">Home</NavLink>
          <NavLink to="/haqida" className="hover:text-yellow-300 transition">Recipe</NavLink>
          <NavLink to="/post" className="hover:text-yellow-300 transition">Posts</NavLink>
          <NavLink to="/contact" className="hover:text-yellow-300 transition">User</NavLink>
          <NavLink to="/login" className="hover:text-yellow-300 transition">Sign In</NavLink>
          <NavLink to="/dashboard" className="hover:text-yellow-300 transition">Dashboard</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
