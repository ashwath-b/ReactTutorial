import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantInfo from "./components/RestaurantInfo";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState, useContext } from "react";
import UserContext from "./utils/UserContext";

const App = () => {
  let { loggedInUser } = useContext(UserContext);
  const [userName, setUserName] = useState(loggedInUser);
  return (
    <div id="app">
      <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
        <Header />
        {/* <UserContext.Provider value={{loggedInUser: "Test User", setUserName}}> */}
          <Outlet />
        {/* </UserContext.Provider> */}
      </UserContext.Provider>
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantInfo />
      }
    ],
    errorElement: <Error />
  }
])

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
