import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/HomePage";

import Profile from "../pages/Profile";
import Aboutus from "../pages/Aboutus";
import Singin from "../pages/Singin";
import Signup from "../pages/Signup";




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
    element: <Aboutus></Aboutus>

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
    path:'/Signup',
    element: <Signup></Signup>
}

        ]
    }
])