import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutUs from "./components/HeaderComp/AboutUs";
import ContactUs from "./components/HeaderComp/ContactUs";
import ErrorComp from "./components/Error/ErrorComp";
import RestaurantMenu from "./components/Rest-cards/RestaurantMenu";

//functional component
const MainComponent = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainComponent />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurantMenu/:restId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <ErrorComp />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
