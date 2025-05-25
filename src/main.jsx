import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Blog from "./pages/Blog.jsx";
import Pricing from "./pages/Pricing.jsx";
import Contact from "./pages/Contact.jsx";
import Agents from "./pages/Agents.jsx";

const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/", element: <Home />},
  {path: "/about", element: <About />},
  {path: "/services", element: <Services />},
  {path: "/destination", element: <Blog />},
  {path: "/pricing", element: <Pricing />},
  {path: "/contact", element: <Contact />},
  {path: "/agent", element: <Agents />},
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
