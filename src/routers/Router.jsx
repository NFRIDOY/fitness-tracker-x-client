import { createBrowserRouter } from "react-router-dom";
import Error from "../components/Error/Error";
import MainLayout from "../layouts/MainLayout/MainLayout"
import Home from "../pages/Home/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                errorElement: <Error></Error>,
            },
            
            // {
            //     path: "/Registration",
            //     element: <Registration></Registration>,
            //     errorElement: <Error></Error>,
            // },
            // {
            //     path: "/Login",
            //     element: <Login></Login>,
            //     errorElement: <Error></Error>,
            // },
            // {
            //     path: "/profile",
            //     element: <PrivateRoute><Profile></Profile></PrivateRoute>,
            //     errorElement: <Error></Error>,
            // },

        ],

    },

]);

export default router;