import { createBrowserRouter } from "react-router-dom";
import Homepage from "../../features/home/Homepage";
import ProductDetails from "../../features/catalog/ProductDetail";
import AboutPage from "../../features/about/About";
import Catalog from "../../features/catalog/catalog";
import App from "../layout/App";
import ContactPage from "../../features/contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Homepage />,
      },
      {
        path: "catalog",
        element: <Catalog />,
      },
      {
        path: "catalog/:id",
        element: <ProductDetails />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);
