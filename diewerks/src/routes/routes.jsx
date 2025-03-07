import Home from "../pages/customerPages/home";
import AboutUs from "../pages/customerPages/aboutUs";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/aboutUs",
    element: <AboutUs />,
  },
];

export default routes;
