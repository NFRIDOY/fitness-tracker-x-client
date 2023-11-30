
import { Outlet } from 'react-router-dom';
import Header1 from './../../components/Headers/Header1';
import { useEffect, useState } from 'react';
import useAxios from '../../hook/useAxios';
import useAuth from '../../hook/useAuth';
import LoadingAnimations from './../../components/LoadingAnimations/LoadingAnimations';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import TrainerDashboard from './TrainerDashboard/TrainerDashboard';
import MemberDashboard from './MemberDashboard';

export default function Dashboard() {
    const [dashboardUser, setDashboardUser] = useState({})
    const axios = useAxios();
    const { user } = useAuth();
    useEffect(() => {
        axios.get(`/dashboard?email=${user.email}`)
            .then(res => {
                setDashboardUser(res.data.role)
                console.log(res.data.role)
            })
    }, [])

    return (
        <div>
            
            <h1>
                {
                    (dashboardUser == "admin") ? <AdminDashboard></AdminDashboard> : dashboardUser == "trainer" ? <TrainerDashboard></TrainerDashboard> : dashboardUser == "member" ? <MemberDashboard></MemberDashboard> : <LoadingAnimations></LoadingAnimations>
                }
            </h1>
            {/* {
                <div>
                    <Outlet></Outlet>
                </div>
            } */}
        </div>
    )
}
