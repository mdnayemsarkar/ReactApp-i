import React from "react";

import web from "../src/image/yannis-papanastasopoulos-U6dnImauDAE-unsplash.jpg";
import Common from "./Common";


const Hcontent = () => {
    return (
      <>
        <Common
          name="Grow Your buisness with"
          imgsrc={web}
          visit="/services"
          btname="Get started"
        />
      </>
    );
  };
  
  export default Hcontent;