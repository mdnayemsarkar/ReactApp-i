import React from "react";
import { useEffect, useState } from "react";
import Card from "./Card";
import Sdata from "./Sdata";
import Header from "./Header";

function Service() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640); // Adjust the breakpoint as needed
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Header />
      <div className="hdr bg-black text-white flex justify-center mt-12 mb-8 text-3xl font-bold sm:mb-8 sm:bg-black">
        This is our Services Page
      </div>
      <div className="bg-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8">
        {Sdata.map((val, ind) => {
          return (
            <Card
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              isSmallScreen={isSmallScreen}
            />
          );
        })}
      </div>
    </>
  );
}

export default Service;
