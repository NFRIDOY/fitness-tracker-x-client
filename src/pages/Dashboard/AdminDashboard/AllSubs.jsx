import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useAuth from "../../../hook/useAuth";
import useAxios from "../../../hook/useAxios";
import LoadingAnimations from "../../../components/LoadingAnimations/LoadingAnimations";
import { Helmet } from "react-helmet";


export default function AllSubs() {

    const { user } = useAuth()

    const [subscribers, setSubscribers] = useState([]);
    const axios = useAxios();

    const { isPending, error, data: allSubscribers } = useQuery({
        queryKey: ['subscribers'],
        queryFn: () =>
            axios.get(`/subscribers`).then(
                (res) => {
                    console.log(res.data)
                    // console.log(alltrainers)
                    setSubscribers(res.data)
                },
            ),
    })

    if (isPending) return <LoadingAnimations></LoadingAnimations>

    return (
        <div className="p-4">
            <Helmet>
                <title>Fitness Tracker | All Subcribers</title>
            </Helmet>
            <div className="text-center">
                {
                    "Total Subscribers: " + subscribers.length
                }
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                {
                    subscribers.map(subs => <div key={subs} className="bg-white rounded-xl p-2  w-96 gap-2">
                        <h1>Name: {subs?.name}</h1>
                        <h1>Email: {subs?.email}</h1>
                    </div>)
                }
            </div>
        </div>
    )
}
