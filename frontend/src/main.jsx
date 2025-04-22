import react from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

const router = createBrowserRouter([{ path: "/", element: <App /> }]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
