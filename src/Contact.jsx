import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";
// import Card from "./Card";
// import Sdata from "./Sdata"

function contact() {
  return (
    <>
    <Header/>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-4 text-3xl font-semibold text-green-400">
            Contact us
          </div>
          <form
            action="#"
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" for="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" for="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 font-bold mb-2"
                for="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows="5"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <NavLink to="/">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                
                >
                  Send Message
                </button>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default contact;
