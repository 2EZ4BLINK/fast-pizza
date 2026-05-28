import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./ui/Home";
import {
  Cart,
  CreateOrder,
  orderLoader,
  Menu,
  menuLoader,
  Order,
} from "./features";

import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

const router = createBrowserRouter([
  //This creates route configuration.
  {
    element: <AppLayout />, // Called Layout Route in React Router since it has no path
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/user",
        element: <Order />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />; // acivates router system, listens to the url
};

export default App;
