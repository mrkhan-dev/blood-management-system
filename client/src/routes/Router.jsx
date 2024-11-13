import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import SignUp from "../pages/signUp/SignUp";
import SignIn from "../pages/signIn/SignIn";
import DashboardLayout from "../layout/DashboardLayout";
import Statistic from "../pages/Dashboard/Common/Statistic";
import DonateBlood from "../pages/Dashboard/Donor/DonateBlood";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import CreateBloodRequest from "../pages/Dashboard/Recipient/CreateBloodRequest";
import ManagePosts from "../pages/Dashboard/Admin/ManagePosts";
import SeeBloodRequests from "../pages/Dashboard/Donor/SeeBloodRequests";

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
        path: "blood-requests",
        element: <SeeBloodRequests />,
      },
      {
        path: "manage-users",
        element: <ManageUsers />,
      },
      {
        path: "create-blood-request",
        element: <CreateBloodRequest />,
      },
      {
        path: "manage-posts",
        element: <ManagePosts />,
      },
    ],
  },
]);

export default router;
