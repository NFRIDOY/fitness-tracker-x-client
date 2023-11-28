import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useAuth from "../../../hook/useAuth";
import useAxios from "../../../hook/useAxios";
import LoadingAnimations from "../../../components/LoadingAnimations/LoadingAnimations";


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

    const togglePay = () => {
        setIsPay(!isPay)
    }
    if (isPending) return <LoadingAnimations></LoadingAnimations>

    return (
        <div className="p-4">
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
                                <th>experience</th>
                                <th>Salary Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                trainers?.map((row, index) => <tr key={row?._id}>
                                    <th>{index + 1}</th>
                                    <td>{row?.fullName}</td>
                                    <td>{row?.email}</td>
                                    <td>{row?.skills}</td>
                                    <td>{row?.week}</td>
                                    <td>{row?.day}</td>
                                    <td>{row?.experience}</td>
                                    {
                                        !isPay && <td>
                                            <button onClick={togglePay}>Pay</button>
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
