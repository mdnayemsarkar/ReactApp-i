import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const notify = () => {
    toast("Submitted Your Concern Successfully! (Thank you)", {
      position: "top-center",
    });
  };

  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-screen bg-black">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-4 text-3xl font-semibold text-green-400">
            Contact us
          </div>
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-white font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-white font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
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
            <div className="mt-6">
              <NavLink to="/">
                To visit your Home Page?
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

export default Contact;
