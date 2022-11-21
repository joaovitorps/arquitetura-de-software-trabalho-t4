import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "font-awesome/css/font-awesome.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login.jsx";
import Home from "./Home.jsx";
import Register from "./Register";
import Midia from "./Midia";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/edit/:midiaId",
    element: <Midia />,
  },
  {
    path: "/create",
    element: <Midia />,
  },
  {
    path: "*",
    element: <h1>Create</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
