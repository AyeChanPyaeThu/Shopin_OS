import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import App from "../App";
import About_Us from "../pages/About_Us";
import CartSection from "../pages/CartSection";
import ProductPage from "../pages/ProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about-us",
        element: <About_Us />,
      },
      {
        path: "cart",
        element: <CartSection />,
      },
      {
        path: "product-page",
        element: <ProductPage />,
      },
      {
        path: "product-detail/:productId",
        element: <ProductDetail />,
      },
    ],
  },
]);

export default router;
