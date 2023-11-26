
import { Link } from 'react-router-dom';
import BeATrainer from '../../components/BeATrainer/BeATrainer';
import PrivateRoute from '../../routers/PrivateRoute';
import Header1 from './../../components/Headers/Header1';
import useAxios from '../../hook/useAxios';
import { useEffect, useState } from 'react';
import useAuth from '../../hook/useAuth';
import { useQuery } from '@tanstack/react-query';
import LoadingAnimations from '../../components/LoadingAnimations/LoadingAnimations';

export default function Trainer() {

    const { user } = useAuth()

    const [trainers, setTrainers] = useState();
    const axios = useAxios();

    const { isPending, error, data: alltrainers } = useQuery({
        queryKey: ['trainers'],
        queryFn: () =>
            axios.get(`/trainers`).then(
                (res) => {
                    console.log(res.data)
                    console.log(alltrainers)
                    setTrainers(res.data)
                },
            ),
    })

    // useEffect(() => {
    //     axios.get("/trainers")
    //         .then(res => {
    //             setTrainers(res.data)
    //             console.log(res.data);
    //         })
    // }, [user])

    if (isPending) return <LoadingAnimations></LoadingAnimations>

    return (
        <div>
            <Header1>
                Trainers
            </Header1>
            {/* All Trainers */}
            <section>
                <h1>
                    {
                        trainers.length
                    }
                </h1>
            </section>
            {/* be a Trainer */}
            <section>
                <Link to={"/BeATrainer"} className='btn btn-success text-white'>
                    Be A Trainer
                </Link>
                {/* <PrivateRoute>
                    <BeATrainer></BeATrainer>
                </PrivateRoute> */}
            </section>
        </div>
    )
}
