import React from "react";
// import img1 from "../src/image/david-boca-ZqJqC-S9sfc-unsplash.jpg";
// import img2 from "../src/image/jared-rice-UwzalTDCpT4-unsplash.jpg";
// import img3 from "../src/image/naja-bertolt-jensen-9Djr2KuNyA8-unsplash.jpg";
// import img4 from "../src/image/talia-cohen-i5FsBOLsB50-unsplash.jpg";
// import img5 from "../src/image/david-boca-ZqJqC-S9sfc-unsplash.jpg";
// import img6 from "../src/image/yannis-papanastasopoulos-U6dnImauDAE-unsplash.jpg";
import Card from "./Card";
import Sdata from "./Sdata";
import Header from "./Header";
function Service() {
  return (
    <>
      <Header />
      <div className="hdr bg-black text-white flex justify-center mt-12 mb-8 text-3xl font-bold  sm:mb-8 sm:bg-black">
        This is our Services Page
      </div>
      <div className="bg-black md:grid md:grid-cols-3 md:gap-8 md:p-14 sm:grid-cols-1 pl-8 pr-8">
        {Sdata.map((val, ind) => {
          return <Card key={ind} imgsrc={val.imgsrc} title={val.title} />;
        })}
 
        {/* <!-- Card 1 --> */}
        {/* <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <img
            src={img1}
            alt="Your image description"
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">Card Title 1</h3>
            <p className="text-gray-600">Card description goes here.</p>
            <button className="border border-blue-400 h-8 w-28 rounded-xl">
              Click Here
            </button>
          </div>
        </div> */}

        {/* <!-- Card 2 --> */}
        {/* <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <img
            src={img2}
            alt="Your image description"
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">Card Title 2</h3>
            <p className="text-gray-600">Card description goes here.</p>
          </div>
        </div> */}

        {/* <!-- Card 3 --> */}
        {/* <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <img
            src={img3}
            alt="Your image description"
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">Card Title 3</h3>
            <p className="text-gray-600">Card description goes here.</p>
          </div>
        </div> */}

        {/* <!-- Card 4 --> */}
        {/* <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <img
            src={img4}
            alt="Your image description"
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">Card Title 4</h3>
            <p className="text-gray-600">Card description goes here.</p>
          </div>
        </div> */}

        {/* Card 5 */}
        {/* <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <img
            src={img5}
            alt="Your image description"
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">Card Title 5</h3>
            <p className="text-gray-600">Card description goes here.</p>
          </div>
        </div> */}

        {/* Card 6 */}
        {/* <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <img
            src={img6}
            alt="Your image description"
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">Card Title 6</h3>
            <p className="text-gray-600">Card description goes here.</p>
          </div>
        </div> */}
      </div>
    </>
  );
}
export default Service;
