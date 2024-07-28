import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  About,
  Contect,
  Projects,
  Skills,
  Education,
} from "./Components";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contect",
        element: <Contect />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/education",
        element: <Education />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  
  <React.StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </React.StrictMode>
      

);
