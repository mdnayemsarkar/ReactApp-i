import React from "react";
import hdrlgo from "../src/image/hdr-logo.png";
import { NavLink } from "react-router-dom";
import Clock from "./Clock";

function Header() {
  return (
    <>
      <header className="flex justify-between px-16 items-center bg-green-400 h-20">
        <div className="hdr-lft">
          <img src={hdrlgo} alt="" />
        </div>
        <div className="hdr-mdl">
          <Clock />
        </div>
        <div className="hdr-right">
          <ul className="flex flex-row gap-10 text-xl font-medium">
            <NavLink to="/">
              <li className="hover:text-2xl border-b-2 border-b-red-500">
                Home
              </li>
            </NavLink>
            <NavLink to="contact">
              <li className="hover:border-b border-b-red-400">Contact</li>
            </NavLink>
            <NavLink to="about">
              <li className="hover:border-b border-b-red-400">About</li>
            </NavLink>
            <NavLink to="services">
              <li className="hover:border-b border-b-red-400">Services</li>
            </NavLink>
          </ul>
        </div>
      </header>
    </>
  );
}
export default Header;
