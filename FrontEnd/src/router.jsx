import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "./Layout/Mainlayout";
import Home from "./Pages/Home/Home";   
import About from "./Pages/About/About";  
import Services from "./Pages/Services/Services";
import Client from "./Pages/Client/Client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        path: "home",
        element: <Home />
      },
      {
        path: "About",
        element: <About />
      },
      {
        path:"Services",
        element:<Services />
      },
      {
        path:"Client",
        element:<Client />
      },
    ]
  }
]);

export default router;
