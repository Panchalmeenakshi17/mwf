import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-[#b3c2d5] via-[#bfcedf] via-[#bfcedf] via-[#bfcedf] to-[#b3c2d5] font-Poppins backdrop-blur-md flex justify-center items-center py-4">
      {/* <NavLink to="/">
        <img
          className="w-20"
          src="../images/n4nn.jpg"
          alt="Logo"
        />
      </NavLink> */}
      <div className="ml-6 text-white text-lg">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[black] font-medium" : ""
          }
        >
          Home
        </NavLink>
      </div>
      <div className="ml-6 text-white text-lg">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-[black] font-medium" : ""
          }
        >
          About
        </NavLink>
      </div>
      <div className="ml-6 text-white text-lg">
        <NavLink
          to="/third"
          className={({ isActive }) =>
            isActive ? "text-[black] font-medium" : ""
          }
        >
          Third
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
