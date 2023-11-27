
import { Outlet } from 'react-router-dom';
import Header1 from './../../components/Headers/Header1';
import { useEffect, useState } from 'react';
import useAxios from '../../hook/useAxios';
import useAuth from '../../hook/useAuth';
import LoadingAnimations from './../../components/LoadingAnimations/LoadingAnimations';

export default function Dashboard() {
    const [dashboardUser, setDashboardUser] = useState({})
    const axios = useAxios();
    const { user } = useAuth();
    console.log(user.email)
    useEffect(() => {
        axios.get(`/dashboard?email=${user.email}`)
            .then(res => {
                setDashboardUser(res.data.role)
                console.log(res.data.role)
            })
    }, [])

    return (
        <div>
            <Header1>
                Dashboard
            </Header1>
            <h1>
                {
                    (dashboardUser == "admin") ? "Admin" : dashboardUser == "trainer" ? "trainer" : dashboardUser == "member" ? "member" : <LoadingAnimations></LoadingAnimations>
                    
                }
            </h1>
            {
                <div>
                    <Outlet></Outlet>
                </div>
            }
        </div>
    )
}
