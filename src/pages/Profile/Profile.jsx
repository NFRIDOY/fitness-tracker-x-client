
import { useState } from 'react';
import useAxios from '../../hook/useAxios';
import useAuth from './../../hook/useAuth';
import { useEffect } from 'react';
import Container from '../../components/Container/Container';
import { Helmet } from 'react-helmet';


export default function Profile() {
    const [dashboardUser, setDashboardUser] = useState({})
    const [currentUser, setCurrentUser] = useState({})
    // const [currentUserEmail, setCurrentUserEmail] = useState()
    const axios = useAxios();
    const { user } = useAuth();
    // setCurrentUserEmail(user)
    useEffect(() => {
        axios.get(`/users?email=${user.email}`)
            .then(res => {
                setDashboardUser(res.data.role)
                // setCurrentUser(res.data)
                console.log(res.data)
                setCurrentUser(res.data)
            })
    }, [user])
    return (
        <div className=''>
            <Helmet>
                <title>Fitness Tracker | Profile</title>
            </Helmet>
            <Container>
                <div className="hero min-h-screen relative">
                    <div className="hero-content flex-col lg:flex-row absolute top-0 left-0 border-red-50">
                        <div className='relative'>
                            <img src={user?.photoURL} className="max-w-sm rounded-lg shadow-2xl border-2" />
                            <div className="absolute -right-2 -bottom-2 badge badge-primary badge-lg uppercase font-bold text-white">{currentUser.role}</div>
                        </div>
                        <div className='relative -top-10'>
                            <h1 className="text-5xl font-bold uppercase">{currentUser?.name}</h1>
                            {/* <p className="py-6 capitalize">{dashboardUser}</p> */}
                            <p className="py-6 ">Email: {currentUser?.email}</p>
                            {/* {
                                (dashboardUser === "member" || dashboardUser === "trainer")  && <button className="btn btn-warning uppercase">Update</button>

                            } */}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
