import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Home";
import About from "./About";
import Services from "./Service";
import Contact from "./Contact";
import { redirect } from "react-router-dom";

function Routs() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      exact: true,
    },
    {
      path: "/about",
      element: <About />,
      exact: true,
    },
    {
      path: "/services",
      element: <Services />,
      exact: true,
    },
    {
      path: "/contact",
      element: <Contact />,
      exact: true,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Routs;





