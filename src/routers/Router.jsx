import { createBrowserRouter } from "react-router-dom";
import Error from "../components/Error/Error";
import MainLayout from "../layouts/MainLayout/MainLayout"
import Home from "../pages/Home/Home";

import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";
// import Gallery from './../pages/Gallery/Gallery';
import Trainer from './../pages/Trainer/Trainer';
import Classes from './../pages/Classes/Classes';
import Dashboard from './../pages/Dashboard/Dashboard';
import Profile from './../pages/Profile/Profile';
import Community from "../pages/Community/Community";
import GalleryPage from "../pages/GalleryPage/GalleryPage";
import PrivateRoute from "./PrivateRoute";
import BeATrainer from "../components/BeATrainer/BeATrainer";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        // errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                // errorElement: <Error></Error>,
            },
            {
                path: "/Gallery",
                // element: <Gallery></Gallery>,
                element: <GalleryPage></GalleryPage>,
                // errorElement: <Error></Error>,
            },
            {
                path: "/Trainer",
                element: <Trainer></Trainer>,
                // errorElement: <Error></Error>,
            },
            {
                path: "/BeATrainer",
                element: <PrivateRoute><BeATrainer></BeATrainer></PrivateRoute>,
                // errorElement: <Error></Error>,
            },
            {
                path: "/Classes",
                element: <Classes></Classes>,
                // errorElement: <Error></Error>,
            },
            {
                path: "/Dashboard",
                element: <Dashboard></Dashboard>,
                // errorElement: <Error></Error>,
            },
            {
                path: "/Community",
                element: <Community></Community>,
                // errorElement: <Error></Error>,
            },
            {
                path: "/Profile",
                element: <Profile></Profile>,
                // errorElement: <Error></Error>,
            },

            {
                path: "/Registration",
                element: <Registration></Registration>,
                // errorElement: <Error></Error>,
            },
            {
                path: "/Login",
                element: <Login></Login>,
                // errorElement: <Error></Error>,
            }
        ],

    },

]);

export default router;