import { useEffect, useState } from "react"
import useAxios from "../../hook/useAxios"
import ClassesCard from "../ClassesCard/ClassesCard";


export default function ClassesCardContainer() {
    const axios = useAxios();
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        axios.get(`/classes`)
            .then(res => {
                console.log(res.data);
                setClasses(res.data);
            })
    }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto w-fit gap-10">
            {
                classes.map((classOne) => <ClassesCard key={classOne._id} classOne={classOne}></ClassesCard>)
            }
        </div>
    )
}
