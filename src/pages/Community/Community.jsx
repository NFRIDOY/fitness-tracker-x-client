import Header1 from "../../components/Headers/Header1";
import useAuth from './../../hook/useAuth';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxios from './../../hook/useAxios';
import Container from './../../components/Container/Container';
import LoadingAnimations from './../../components/LoadingAnimations/LoadingAnimations';
import { useEffect } from 'react';
import { Helmet } from "react-helmet";


export default function Community() {

    const { user } = useAuth()

    const [forums, setForums] = useState();
    const axios = useAxios();
    // const [vote, setVote] = useState(0);
    const { isPending, error, data: allForums, refetch } = useQuery({
        queryKey: ['forums'],
        queryFn: () =>
            axios.get(`/forums`).then(
                (res) => {
                    console.log(res.data)
                    // console.log(alltrainers)
                    setForums(res.data)
                },
            ),
    })

    // useEffect(() => {

    // },[])



    const getVoteDB = (id) => {
        // refetch()
        let getVote;
        axios.get(`/forums/${id}`)
            .then(
                (res) => {
                    console.log(res.data.vote)
                    // console.log(alltrainers)
                    // setForums(res.data)
                    getVote = res.data.votes
                })
        return getVote;
    }

    const HandleVote = (id) => {


        axios.patch(`/forums/${id}`)
            .then(
                (res) => {
                    console.log(res.data)
                    // console.log(alltrainers)
                    // setForums(res.data)
                })

        // refetch()

    }

    const upVote = (id, oldVote) => {
        console.log(oldVote)
        let vote = parseInt(oldVote) + 1;
        console.log(vote)
        let newVoteObj = { vote }
        axios.patch(`/forums/${id}`, newVoteObj)
            .then(
                (res) => {
                    console.log(res.data)
                    // console.log(alltrainers)
                    // setForums(res.data)
                })

    }
    const downVote = (id, oldVote) => {
        console.log(oldVote)
        let vote = parseInt(oldVote) - 1;
        console.log(vote)
        let newVoteObj = { vote }
        axios.patch(`/forums/${id}`, newVoteObj)
            .then(
                (res) => {
                    console.log(res.data)
                    // console.log(alltrainers)
                    // setForums(res.data)
                })
    }


    if (isPending) return <LoadingAnimations></LoadingAnimations>
    // setVote(forums?.vote)
    return (
        <div>
            <Helmet>
                <title>Fitness Tracker | Community</title>
            </Helmet>
            <Header1>
                Community
            </Header1>
            <Container>
                <section className="grid grid-cols-1 gap-4">
                    {
                        forums?.map((forum) => <div key={forum?._id} className="card w-full bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">{forum?.title}</h2>
                                <p className="text-gray-500 italic underline" >{forum?.role}</p>
                                <p>{forum?.description}</p>
                                {/* <div className="card-actions justify-end">
                                    <button onClick={() => downVote(forum?._id, forum?.vote)} className="btn btn-error text-white">
                                        <span>{forum?.vote}</span>Down Vote
                                    </button>
                                    <button onClick={() => upVote(forum?._id, forum?.vote)} className="btn btn-primary text-white">
                                        <span>{forum?.vote}</span>Up Vote
                                    </button>
                                </div> */}
                            </div>
                        </div>)
                    }
                </section>
            </Container>
        </div>
    )
}
