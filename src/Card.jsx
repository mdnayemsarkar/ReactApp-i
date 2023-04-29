import React from "react";
import web from "../src/image/david-boca-ZqJqC-S9sfc-unsplash.jpg";

const Card = (props) =>{
    return(
        <>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <img
            src={props.imgsrc}
            alt="Your image description"
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">{props.title}</h3>
            <p className="text-gray-600">Card description goes here.</p>
            <button className="border border-blue-400 h-8 w-28 rounded-xl font-semibold hover:bg-green-400 hover:text-white">Click Here</button>
          </div>
        </div> 
        </>
    )
}
export default Card;