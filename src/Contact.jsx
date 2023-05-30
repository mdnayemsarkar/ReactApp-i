import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function contact() {
  const notify = () => {
    toast(
      "Submited Your Concern succesfully!                         (Thank you)",
      {
        position: "top-center",
      }
    );
  };
  return (
    <>
      <Header />
      <div className="md:flex justify-center items-center md:h-screen md:bg-black sm:flex sm:justify-center sm:items-center sm:bg-black sm:h-screen">
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
              <NavLink to="">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={notify}
                >
                  Send Message
                </button>
              </NavLink>
            </div>
            <div className="gobk mt-6">
              <NavLink to="/">
                To visit Your Home Page ??
                <span className="text-blue-500"> Click Here...</span>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
export default contact;
