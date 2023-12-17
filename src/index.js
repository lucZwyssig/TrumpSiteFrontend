import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Timeline from "./Pages/Timeline";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Article from "./Pages/Article";
import Article1 from "./Pages/Article1";
import Article2 from "./Pages/Article2";
import Article3 from "./Pages/Article3";
import Quiz from "./Pages/Quiz";
import Sources from "./Pages/Sources";
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/timeline",
    element: <Timeline />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/article/1",
    element: <Article1 />
  },
  {
    path: "/article/2",
    element: <Article2 />
  },
  {
    path: "/article/3",
    element: <Article3 />
  }, 
  {
    path: "/quiz",
    element: <Quiz />
  },
  {
    path: "/sources",
    element: <Sources/>
  }
]);
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
 