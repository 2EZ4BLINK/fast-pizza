import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./ui/Home";
import { Cart, CreateOrder, Menu, Order } from "./features";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  //This creates route configuration.
  {
    element: <AppLayout />, // Called Layout Route in React Router since it has no path
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
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
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />; // acivates router system, listens to the url
};

export default App;
