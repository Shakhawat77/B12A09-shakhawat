import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/HomePage";

import Profile from "../pages/Profile";
import Singin from "../pages/Singin";
import Register from "../pages/Register";
import Details from "../pages/Details";
import PrivateRoute from "./PrivateRoute";
import Services from "../pages/Services";
import ForgetPassword from "../pages/ForgotPassword";





export const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        children: [
{
    index: true,
    element: <Homepage></Homepage>
},
{
    path: '/Aboutus',
    element: <PrivateRoute><Services></Services></PrivateRoute>
},
{
    path:'/profile',
    element: <PrivateRoute><Profile></Profile></PrivateRoute>
},
{
    path:'/Signin',
    element: <Singin></Singin>
},
{
    path:'/Register',
    element: <Register></Register>
},
{
    path:'/Details/:serviceId',
    element: <PrivateRoute><Details></Details></PrivateRoute>
},
{
    path:'/forgot-password',
     element:<ForgetPassword></ForgetPassword>
}

        ]
    }
])