import { Link, useParams } from "react-router-dom"
import useAuth from "../../hook/useAuth"
import useAxios from "../../hook/useAxios"
import { useEffect, useState } from "react"
import Header1 from './../../components/Headers/Header1';


export default function TrainerDetails() {
    const { id } = useParams()
    const { user } = useAuth()
    const axios = useAxios()
    console.log(id)
    const [trainerDetails, setTrainerDetails] = useState({})
    useEffect(() => {
        axios.get(`/trainers/${id}`)
            .then(res => {
                console.log(res.data)
                setTrainerDetails(res.data)
            })
    }, [user])
    const { _id, email,
        fullName,
        age,
        description,
        skills,
        week,
        day,
        fbLink,
        experience,
        photoURL,
        role,
        status } = trainerDetails;
    // console.log(fullName)
    console.log(id)
    return (
        <div>
            {/* <Header1>
                Trainer Details
            </Header1> */}
            {/* <div> */}
            {/* <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="object-cover w-full h-96" /> */}
            {/* </div> */}
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row lg:items-start">
                        <img src={photoURL} className="max-w-sm rounded-lg shadow-2xl" />
                        <div className="">
                            <h1 className="text-5xl font-bold">{fullName}</h1>
                            <p className="py-2">Role: {role}</p>
                            <p className="py-2">Email: {email} </p>
                            <p className="py-2">Year Of Experience: {experience} Years</p>
                            <Link to={'/TrainerBooked'} className="py-2">Availabe days in a Week: {week}</Link>
                            <p className="py-2">Availabe time in a Day : {day}</p>
                            <Link to={'/TrainerBooked'}  className="btn btn-primary">Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>
            {
                fullName
            }
            {
                console.log(trainerDetails)
            }
        </div>
    )
}
