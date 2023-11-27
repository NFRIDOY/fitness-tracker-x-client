
import { Outlet } from 'react-router-dom';
import Header1 from './../../components/Headers/Header1';
import { useEffect, useState } from 'react';
import useAxios from '../../hook/useAxios';
import useAuth from '../../hook/useAuth';

export default function Dashboard() {
    const [dashboardUser, setDashboardUser] = useState({})
    const axios = useAxios();
    const { user } = useAuth();
    useEffect(() => {
        axios.get(`/dashboard?email=${user.email}`)
            .then(res => {
                setDashboardUser(res.data)
                console.log(res.data)
            })
    }, [])

    return (
        <div>
            <Header1>
                Dashboard
            </Header1>
            <h1>
                {

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
