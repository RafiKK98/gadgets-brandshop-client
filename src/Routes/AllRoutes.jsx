import { createBrowserRouter } from "react-router-dom";
import App from "../components/public/App";
import Root from "../components/Root";
import AddProduct from "../components/private/AddProduct";
import MyCart from "../components/private/MyCart";
import BrandProducts from "../components/public/BrandProducts";
import ProductDetails from "../components/private/ProductDetails";
import Error404Page from "../components/Error404Page";
import Login from "../components/public/Login";
import Register from "../components/public/Register";
import PrivateRoute from "./PrivateRoute";
import UpdateProduct from "../components/private/UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: '/',
        element: <App />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/add-product',
        element: <PrivateRoute><AddProduct /></PrivateRoute>
      },
      {
        path: '/update-product/:productId',
        element: <PrivateRoute><UpdateProduct /></PrivateRoute>,
        loader: ({params}) => fetch(`https://gadgets-brand-shop-server-1ci9qmx4f-rafikk98.vercel.app/products/${params.productId}`)
      },
      {
        path: '/my-cart',
        element: <PrivateRoute><MyCart /></PrivateRoute>,
        loader: () => fetch('https://gadgets-brand-shop-server-1ci9qmx4f-rafikk98.vercel.app/cart')
      },
      {
        path: '/brand-products/:brandName',
        element: <BrandProducts />,
        loader: () => fetch('https://gadgets-brand-shop-server-1ci9qmx4f-rafikk98.vercel.app/products'),
      },
      {
        path: '/product-details/:productId',
        element: <PrivateRoute><ProductDetails /></PrivateRoute>,
        loader: ({params}) => fetch(`https://gadgets-brand-shop-server-1ci9qmx4f-rafikk98.vercel.app/products/${params.productId}`)
      },
    ],
    errorElement: <Error404Page />
  },
]);

export default router;