
import { Link } from 'react-router-dom';
import BeATrainer from '../../components/BeATrainer/BeATrainer';
import PrivateRoute from '../../routers/PrivateRoute';
import Header1 from './../../components/Headers/Header1';
import useAxios from '../../hook/useAxios';
import { useEffect, useState } from 'react';
import useAuth from '../../hook/useAuth';
import { useQuery } from '@tanstack/react-query';
import LoadingAnimations from '../../components/LoadingAnimations/LoadingAnimations';
import { FaFacebook } from "react-icons/fa";
import Container from './../../components/Container/Container';
import TrainerCard from '../../components/TrainerCard/TrainerCard';
import TrainersPlans from '../../components/TrainersPlans/TrainersPlans';


export default function Trainer() {

    const { user } = useAuth()

    const [trainers, setTrainers] = useState();
    const axios = useAxios();
    const status = "confirmation";

    const { isPending, error, data: alltrainers } = useQuery({
        queryKey: ['trainers'],
        queryFn: () =>
            axios.get(`/trainers?status=${status}`).then(
                (res) => {
                    console.log(res.data)
                    // console.log(alltrainers)
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
                <h1 className='text-center text-xl underline italic'> Total Trainers :
                    {
                        trainers.length
                    }
                </h1>
                {/* <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">T</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div> */}
                <Container>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full'>
                        {
                            trainers.map((trainerOne) => <TrainerCard key={trainerOne?._id} trainerOne={trainerOne}></TrainerCard>)
                        }
                    </div>
                </Container>
            </section>
            {/* be a Trainer */}
            <section className='mx-max-w-lg'>
                <TrainersPlans></TrainersPlans>
            </section>
            <section className='mx-auto w-fit'>
                <Link to={"/BeATrainer"} className='btn btn-success text-white '>
                    Be A Trainer
                </Link>
                {/* <PrivateRoute>
                    <BeATrainer></BeATrainer>
                </PrivateRoute> */}
            </section>
        </div>
    )
}
