import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/HomePage";

import Profile from "../pages/Profile";
import Aboutus from "../pages/Aboutus";
import Singin from "../pages/Singin";
import Register from "../pages/Register";
import Details from "../pages/Details";
import PrivateRoute from "./PrivateRoute";





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
    element: <PrivateRoute><Aboutus></Aboutus></PrivateRoute>

},
{
    path:'/profile',
    element: <Profile></Profile>
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
    path:'/:1',
    element: <Details></Details>
},


        ]
    }
])