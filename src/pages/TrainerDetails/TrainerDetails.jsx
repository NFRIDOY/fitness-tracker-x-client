import { useParams } from "react-router-dom"
import useAuth from "../../hook/useAuth"
import useAxios from "../../hook/useAxios"
import { useEffect, useState } from "react"
import Header1 from './../../components/Headers/Header1';


export default function TrainerDetails() {
    const { id } = useParams()
    const { user } = useAuth()
    const axios = useAxios()
    const { trainerDetails, setTrainerDetails } = useState(null)
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
        role,
        status } = trainerDetails;
    // console.log(fullName)
    console.log(id)
    return (
        <div>
            <h1>
                Trainer Details
            </h1>
            {
                fullName
            }
        </div>
    )
}
