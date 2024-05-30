import { createBrowserRouter } from "react-router-dom";
import Rank from "../pages/Rank";
import Join from "../pages/Login";
import Login from "../pages/Login";
import Enhance from "../pages/Enhance";
import Create from "../pages/Create";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rank />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/join",
    element: <Join />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/enhance",
    element: <Enhance />,
  },
]);

export default router;
