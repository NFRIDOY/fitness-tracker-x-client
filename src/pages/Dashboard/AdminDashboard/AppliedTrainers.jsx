import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAuth from "../../../hook/useAuth";
import useAxios from "../../../hook/useAxios";
import LoadingAnimations from "../../../components/LoadingAnimations/LoadingAnimations";
import { FaEye } from "react-icons/fa";
import { Helmet } from "react-helmet";


export default function AppliedTrainers() {

    const { user } = useAuth()

    const [trainers, setTrainers] = useState([]);
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [isReject, setIsReject] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [trainerOne, setTrainerOne] = useState({});
    const axios = useAxios();
    let status = "pending";

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

    useEffect(() => {



    }, [isOpen])

    const handleConfimation = (emailThis) => {
        status = "confirmation";
        setIsConfirmed(!isConfirmed);
        setIsReject(false);

        axios.put(`/trainer/${emailThis}?status=${status}`, trainerOne).then(
            (res) => {
                console.log(res.data)
                // console.log(alltrainers)
                setTrainerOne(res.data)
            },
        )
    }

    // rejects
    const handleReject = (emailThis) => {
        status = "reject";
        setIsReject(!setIsReject);
        setIsConfirmed(false);
        axios.put(`/trainer/${emailThis}?status=${status}`, trainerOne).then(
            (res) => {
                console.log(res.data)
                // console.log(alltrainers)
                setTrainerOne(res.data)
            },
        )
    }

    const openModal = (id) => {
        axios.get(`/trainers/${id}`).then(
            (res) => {
                console.log(res.data)
                // console.log(alltrainers)
                setTrainerOne(res.data)
            },
        )
    }


    if (isPending) return <LoadingAnimations></LoadingAnimations>

    return (
        <div className="p-4">
            <Helmet>
                <title>Fitness Tracker | Applied Trainers</title>
            </Helmet>
            <div className="text-center">
                {
                    "Total Applicants: " + trainers.length
                }
            </div>
            <div>
                {/* The button to open modal */}


                {/* Put this part before </body> tag */}


            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-xs">
                        <thead>
                            <tr>
                                <th></th>
                                <th className="text-center">Name</th>
                                <th className="text-center">Email</th>
                                <th className="text-center">Skills</th>
                                <th className="text-center">Week</th>
                                <th className="text-center">Day</th>
                                {/* <th className="text-center">experience</th> */}
                                <th className="text-center">Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                trainers?.map((row, index) => <tr key={row?._id}>
                                    <th className="text-center">{index + 1}</th>
                                    <td className="text-center">{row?.fullName}</td>
                                    <td className="text-center">{row?.email}</td>
                                    <td className="text-center">{row?.skills}</td>
                                    <td className="text-center">{row?.week}</td>
                                    <td className="text-center">{row?.day}</td>
                                    {/* <td className="text-center">{row?.experience}</td> */}
                                    {
                                        !isConfirmed && <td className="text-center">
                                            {/* <button ><label htmlFor="my_modal_7" className="btn" onClick={toggleModal(row?._id)}></label></button> */}
                                            {/* <button ><label htmlFor={row?._id} className="btn"></label></button> */}
                                            <button onClick={() => openModal(row?._id)}>
                                                <label htmlFor="my_modal_7" className="">
                                                    <FaEye />
                                                </label>
                                            </button>
                                        </td>
                                    }
                                    <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                                    <div className="modal" role="dialog">
                                        <div className="modal-box w-fit">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>Field</th>
                                                        <th>Value</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th>Name</th>
                                                        <td>{trainerOne?.fullName}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Email</th>
                                                        <td>{trainerOne?.email}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Skills</th>
                                                        <td>{trainerOne?.skills}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Availavle in A Week</th>
                                                        <td>{trainerOne?.week}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Availavle in A Day</th>
                                                        <td>{trainerOne?.day}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Experience</th>
                                                        <td>{trainerOne?.experience} Years</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Age</th>
                                                        <td>{trainerOne?.age}</td>
                                                    </tr>
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <th>
                                                            <button onClick={() => handleConfimation(trainerOne?.email)} className="btn btn-success text-white mx-auto">Confirmation</button>
                                                        </th>
                                                        <th>
                                                            <button onClick={() => handleReject(trainerOne?.email)} className="btn btn-error text-white mx-auto">Reject</button>
                                                        </th>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                            {/* <h3 className="text-lg font-bold"><span>fullName</span>{trainerOne?.fullName}</h3>
                                            <p className="py-4">
                                                <span>email</span>{trainerOne?.email}
                                            </p>
                                            <p className="py-4">
                                                <span>skills</span>{trainerOne?.skills}
                                            </p>
                                            <p className="py-4">
                                                <span>Availavle in A Week: </span>{trainerOne?.week}
                                            </p>
                                            <p className="py-4">
                                                <span></span>{trainerOne?.day}
                                            </p>
                                            <p className="py-4">

                                                <span></span>{trainerOne?.experience}
                                            </p>
                                            <p className="py-4">
                                                <span></span>{trainerOne?.age}
                                            </p
                                            <p className="py-4">
                                                
                                            </p> */}
                                        </div>
                                        <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                                    </div>
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
