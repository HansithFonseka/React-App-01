import React from "react";
import { FaBeer } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

// import { NavLink } from "react-router-dom";

const NavbarItem = ({ name }) => {
  return (
    <p className="px-5 cursor-pointer hover:text-gray-500 transition-all ease-in-out">
      {name}
    </p>
  );
};

function Navbar() {
  return (
    <div className="p-4 text-gray-100 bg-gray-800 sticky flex flex-row gap-3 justify-between items-center shadow-md">
      <FaBeer />
      {/* <NavLink to="/store"> Store </NavLink> */}
      <div className="flex flex-row gap-5">
        <NavbarItem name="Social" />
        <NavbarItem name="Contact" />
        <NavbarItem name="Help" />
      </div>
      <div className="flex flex-row gap-3">
        <FaSearch />
        <FaShoppingCart />
      </div>
    </div>
  );
}

export default Navbar;
