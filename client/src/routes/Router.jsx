import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import SignUp from "../pages/signUp/SignUp";
import SignIn from "../pages/signIn/SignIn";
import DashboardLayout from "../layout/DashboardLayout";
import Statistic from "../pages/Dashboard/Common/Statistic";
import DonateBlood from "../pages/Dashboard/Donor/DonateBlood";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {path: "signUp", element: <SignUp />},
  {path: "signIn", element: <SignIn />},

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Statistic />,
      },
      {
        path: "donate-blood",
        element: <DonateBlood />,
      },
      {
        path: "manage-users",
        element: <ManageUsers />,
      },
    ],
  },
]);

export default router;
