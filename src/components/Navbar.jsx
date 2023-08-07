import { useState } from "react";
useState;
import { close, logo, menu } from "../assets";
close;
logo;
menu;
import { navLinks } from "../constants";
navLinks;

export const Navbar = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
    </nav>
  );
};
export default Navbar;
