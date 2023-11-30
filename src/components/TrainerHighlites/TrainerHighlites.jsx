import React from 'react'
import useAuth from '../../hook/useAuth';
import { useState } from 'react';
import useAxios from '../../hook/useAxios';
import { useQuery } from '@tanstack/react-query';
import Header1 from '../Headers/Header1';
import TrainerCard from '../TrainerCard/TrainerCard';

export default function TrainerHighlites() {
    const { user } = useAuth()
    const [trainers, setTrainers] = useState();
    const axios = useAxios();
    const status = "confirmation";
    const { isPending, error, data: alltrainers, refetch } = useQuery({
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

    // refetch()
    return (
        <div>
            <Header1>
                Trainers
            </Header1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full'>
                {
                    trainers.map((trainerOne) => <TrainerCard key={trainerOne?._id} trainerOne={trainerOne}></TrainerCard>)
                }
            </div>
        </div>
    )
}
