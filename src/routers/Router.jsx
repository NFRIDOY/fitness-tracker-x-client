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
import TrainerDetails from "../pages/TrainerDetails/TrainerDetails";
import AdminDashboard from "../pages/Dashboard/AdminDashboard/AdminDashboard";
import TrainerDashboard from "../pages/Dashboard/TrainerDashboard/TrainerDashboard";
import MemberDashboard from "../pages/Dashboard/MemberDashboard/MemberDashboard";
import AllSubs from "../pages/Dashboard/AdminDashboard/AllSubs";
import AllTrainers from "../pages/Dashboard/AdminDashboard/AllTrainers";
import AppliedTrainers from "../pages/Dashboard/AdminDashboard/AppliedTrainers";
import Balance from "../pages/Dashboard/AdminDashboard/Balance";
import Forum from "../pages/Forum/Forum";
import TrainerBooked from "../pages/TrainerBooked/TrainerBooked";
import Payment from "../pages/Payment/Payment";
import ManageSlots from "../pages/Dashboard/TrainerDashboard/ManageSlots";
import Member from "../pages/Dashboard/TrainerDashboard/Member";
import AddClass from "../pages/Dashboard/TrainerDashboard/AddClass";
import ActivityLog from './../pages/Dashboard/MemberDashboard/ActivityLog';
import ProfileSettings from './../pages/Dashboard/MemberDashboard/ProfileSettings';
import RecommendedClassesPage from "../pages/Dashboard/MemberDashboard/RecommendedClassesPage";


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
                path: "/Trainer/:id",
                element: <PrivateRoute><TrainerDetails></TrainerDetails></PrivateRoute>,
                // loader: ({perams}) => fetch()
                // errorElement: <Error></Error>,
            },
            {
                path: "/BeATrainer",
                element: <PrivateRoute><BeATrainer></BeATrainer></PrivateRoute>,
                // errorElement: <Error></Error>,
            },
            {
                path: "/TrainerBooked",
                element: <PrivateRoute><TrainerBooked></TrainerBooked></PrivateRoute>,
                // errorElement: <Error></Error>,
            },
            {
                path: "/Classes",
                element: <Classes></Classes>,
                // errorElement: <Error></Error>,
            },
            {
                path: "/Dashboard",
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
                // errorElement: <Error></Error>,
                children: [

                ]
            },
            {
                path: "/Dashboard/AdminDashboard",
                element: <PrivateRoute><AdminDashboard></AdminDashboard></PrivateRoute>,
                // errorElement: <Error></Error>,
                children: [
                    {
                        path: "/Dashboard/AdminDashboard/AllSubs",
                        element: <AllSubs></AllSubs>,
                    },
                    {
                        path: "/Dashboard/AdminDashboard/AllTrainers",
                        element: <AllTrainers></AllTrainers>,
                    },
                    {
                        path: "/Dashboard/AdminDashboard/AppliedTrainers",
                        element: <AppliedTrainers></AppliedTrainers>,
                    },
                    {
                        path: "/Dashboard/AdminDashboard/Balance",
                        element: <Balance></Balance>,
                    },
                    {
                        path: "/Dashboard/AdminDashboard/Forum",
                        element: <Forum></Forum>,
                    },
                ]
            },
            {
                path: "/Dashboard/TrainerDashbord",
                element: <PrivateRoute><TrainerDashboard></TrainerDashboard></PrivateRoute>,
                // errorElement: <Error></Error>,
                children: [
                    {
                        path: "/Dashboard/TrainerDashbord/ManageSlots",
                        element: <PrivateRoute><ManageSlots></ManageSlots></PrivateRoute>,
                    },
                    {
                        path: "/Dashboard/TrainerDashbord/Member",
                        element: <PrivateRoute><Member></Member></PrivateRoute>,
                    },
                    {
                        path: "/Dashboard/TrainerDashbord/Forum",
                        element: <PrivateRoute><Forum></Forum></PrivateRoute>,
                    },
                    {
                        path: "/Dashboard/TrainerDashbord/AddClass",
                        element: <PrivateRoute><AddClass></AddClass></PrivateRoute>,
                    }

                ]
            },
            {
                path: "/Dashboard/MemberDashboard",
                element: <PrivateRoute><MemberDashboard></MemberDashboard></PrivateRoute>,
                // errorElement: <Error></Error>,
                children: [
                    {
                        path: "/Dashboard/MemberDashboard/ActivityLog",
                        element: <PrivateRoute><ActivityLog></ActivityLog></PrivateRoute>,
                    },
                    {
                        path: "/Dashboard/MemberDashboard/ProfileSettings",
                        element: <PrivateRoute><ProfileSettings></ProfileSettings></PrivateRoute>,
                    },
                    {
                        path: "/Dashboard/MemberDashboard/RecommendedClassesPage",
                        element: <PrivateRoute><RecommendedClassesPage></RecommendedClassesPage></PrivateRoute>,
                    },
                    // {
                    //     path: "/Dashboard/MemberDashboard/",
                    //     element: <PrivateRoute></PrivateRoute>,
                    // },
                ]
            },
            {
                path: "/Community",
                element: <Community></Community>,
                // errorElement: <Error></Error>,
            },
            {
                path: "/Profile",
                element: <PrivateRoute><Profile></Profile></PrivateRoute>,
                // errorElement: <Error></Error>,
            },
            {
                path: "/Payment",
                element: <PrivateRoute><Payment></Payment></PrivateRoute>,
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