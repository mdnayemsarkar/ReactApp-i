import React from "react";
// import web from "../src/image/david-boca-ZqJqC-S9sfc-unsplash.jpg";
import web from "../src/image/Nayeem.png";
import Header from "./Header";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <body className=" bg-black text-white h-screen sm:bg-black sm:text-white sm:h-screen sm:w-screen">
        <Header />
        {/* ....................header part ends here ......................*/}

        {/* ...................body section starts here....................... */}

        <div className="bg-black container grid grid-cols-1 items-center mt-10  md:grid md:grid-cols-2 md:items-center pl-10">
          <div className="lft-cntnr flex flex-col justify-center items-center font-semibold">
            <div className="cntnt-i text-5xl font-bold">
              <span className="text-3xl text-red-800">My </span>Name is <br />
              <br />
              <span className="pl-2 text-blue-400">Nayem Sarkar</span> <br />
              <span className="text-3xl"> and i am a </span>{" "}
              <span className="text-3xl text-red-800">
                front-end Web Developer
              </span>
            </div>

            <div className="cntnt-iii mt-8 pr-[260px]">
              <NavLink to="about">
                {" "}
                <button className="border border-1 border-blue-500 rounded-3xl w-36 h-12 hover:text-white hover: bg-green-400">
                  Click Here
                </button>
              </NavLink>
            </div>
          </div>
          <div className="right cntnr sm:bg-black sm:mt-8">
            <img
              src={web}
              className="sm:h-52 sm:bg-black sm:pl-52 sm:mt-[60px] pl-11 rounded-xl md:h-[370px]"
              alt=""
            />
          </div>
        </div>
        {/* ...............................Home page ends here.............................. */}
      </body>
    </>
  );
};

export default Home;
