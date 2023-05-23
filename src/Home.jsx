import React from "react";
// import web from "../src/image/david-boca-ZqJqC-S9sfc-unsplash.jpg";
import web from "../src/image/Nayeem.png";
import Header from "./Header";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <body>
        <Header />
        {/* ....................header part ends here ......................*/}

        {/* ...................body section starts here....................... */}

        <div className="container grid grid-cols-2">
          <div className="lft-cntnr flex flex-col justify-center items-center font-semibold">
            <div className="cntnt-i text-5xl font-bold">
              Grow Your buisness <br /> <span className="pl-20">with</span>
              <br />
              <span className="pl-6 text-blue-400 hover:text-5xl">
                Nayem Sarkar
              </span>
            </div>
            <div className="cntnt-ii font-light text-gray-800 mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Accusantium magni quaerat, accusamus <br /> reprehenderit eveniet
              tempora?
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
          <div className="right cntnr ">
            <img
              src={web}
              className="mt-[20%] pl-11 rounded-xl h-1/2 w-2/3 animate-pulse  ease-in-out duration-1000  hover:scale-150"
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
