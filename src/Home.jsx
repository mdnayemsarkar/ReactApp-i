import React from "react";
import web from "../src/image/Nayeem.png";
import Header from "./Header";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <body className="bg-black text-white sm:bg-black sm:text-white sm:h-screen sm:w-screen">
        <Header />
        {/* Header part */}

        {/* Body section */}
        <div className="bg-black container grid grid-cols-1 items-center mt-10 md:grid md:grid-cols-2 md:items-center pl-10">
          <div className="lft-cntnr flex flex-col justify-center items-center font-semibold pl-8 sm:mb-56 md:mb-0 mt-14 md:pr-[100px]">
            <div className="cntnt-i text-5xl font-bold">
              <span className="text-3xl text-red-800">My </span>Name is <br />
              <br />
              <span className="pl-2 text-blue-400">Nayem Sarkar</span> <br />
              <span className="text-3xl">and I am a</span>{" "}
              <span className="text-3xl text-red-800">
                front-end Web Developer
              </span>
            </div>

            <div className="cntnt-iii mt-8">
              <NavLink to="/about">
                <button className="border border-1 border-blue-500 rounded-3xl w-36 h-12 hover:text-white hover:bg-green-400">
                  Click Here
                </button>
              </NavLink>
            </div>
          </div>
          <div className="right cntnr mt-8 md:mt-0">
            <img
              src={web}
              className="w-full rounded-xl md:w-auto md:pl-52 md:mt-[60px] md:h-[370px]"
              alt=""
            />
          </div>
        </div>
        {/* Home page */}
      </body>
    </>
  );
};

export default Home;
