import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./ui/Home";
import {
  Cart,
  CreateOrder,
  orderLoader,
  Menu,
  menuLoader,
  Order,
  createOrderAction,
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
        loader: menuLoader, // When you want to fetch data before the rendering of page
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
        action: createOrderAction, // runs when a form is submitted, Usually returns a response or redirect
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
