import React from "react";
import { Navbar } from "flowbite-react";
import hdrlgo from "../src/image/Believe in Yourself.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar fluid rounded className="bg-black">
        <Navbar.Brand href="/navbars">
          <img alt="Flowbite Logo" className="mr-3 h-6 sm:h-9" src={hdrlgo} />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link active href="/home">
            Home
          </Navbar.Link>
          <Navbar.Link href="/about">About</Navbar.Link>
          <Navbar.Link href="/services">Services</Navbar.Link>
          <Navbar.Link href="/contact">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
