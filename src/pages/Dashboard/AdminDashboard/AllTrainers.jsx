import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useAuth from "../../../hook/useAuth";
import useAxios from "../../../hook/useAxios";
import LoadingAnimations from "../../../components/LoadingAnimations/LoadingAnimations";
import { Helmet } from "react-helmet";


export default function AllTrainers() {
    const { user } = useAuth()

    const [trainers, setTrainers] = useState([]);
    const [isPay, setIsPay] = useState(false);

    const axios = useAxios();
    const status = "confirmation";

    const { isPending, error, data: allTrainers } = useQuery({
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

    const togglePay = (id) => {
        setIsPay(!isPay)
    }
    if (isPending) return <LoadingAnimations></LoadingAnimations>

    return (
        <div className="p-4">
            <Helmet>
                <title>Fitness Tracker | AppliedTrainers</title>
            </Helmet>
            <div className="text-center">
                {
                    "Total Subscribers: " + trainers.length
                }
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-xs">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Skills</th>
                                <th>Week</th>
                                <th>Day</th>
                                <th>Experience</th>
                                <th>Salary Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                trainers?.map((row, index) => <tr key={row?._id}>
                                    <th>{index + 1}</th>
                                    <td>{row?.fullName}</td>
                                    <td>{row?.email}</td>
                                    <td className="text-center">{row?.skills?.map((skill, index) => (
                                        <p
                                            key={index}
                                            className="mx-[2px]"
                                        >
                                            {skill}
                                        </p>
                                    ))}</td>
                                    <td className="text-center">
                                        <div className="grid grid-cols-2 gap-x-1 gap-y-0 p-0 w-fit mx-auto">
                                            {
                                                row?.weeklyDays?.map((day, index) => (
                                                    <p
                                                        key={index}
                                                        className="mx-[0px] text-green-700 w-fit"
                                                    >
                                                        {day}
                                                    </p>
                                                ))
                                            }
                                        </div>
                                    </td>
                                    <td className="text-center">{row?.timesInDay?.map((time, index) => (
                                        <p
                                            key={index}
                                            className="mx-[2px] text-green-600"
                                        >
                                            {time}
                                        </p>
                                    ))}</td>
                                    <td>{row?.experience}</td>
                                    {
                                        !isPay && <td>
                                            <button onClick={() => togglePay(row?._id)}>Pay</button>
                                        </td>
                                    }
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {/* <div className="grid grid-cols-1 md:grid-cols-2">
                {
                    trainers.map(subs => <div key={subs} className="bg-white rounded-xl p-2  w-96 gap-2">
                        <h1>Name: {subs?.name}</h1>
                        <h1>Email: {subs?.email}</h1>
                    </div>)
                }
            </div> */}
        </div>
    )
}
