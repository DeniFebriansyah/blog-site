import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BlogsListPage from "./pages/BlogsListPage";
import BlogPage from "./pages/BlogPage";
import AuthorPage from "./pages/AuthorPage";
import ContactPage from "./pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BlogsListPage />,
  },
  {
    path: "/:blog_id",
    element: <BlogPage />,
  },
  {
    path: "/author",
    element: <AuthorPage />,
  },
  {
    path: "/contactpage",
    element: <ContactPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
