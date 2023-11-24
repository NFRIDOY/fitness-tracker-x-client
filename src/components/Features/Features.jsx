import { data } from "autoprefixer"
import { useEffect, useState } from "react"
import Container from "../Container/Container"


export default function Features() {
    const [features, setfeatures] = useState([])

    useEffect(() => {
        fetch("/features.json")
            .then(res => res.json())
            .then(data => {
                setfeatures(data)
            })
    }, [])

    return (
        <div>
            <Container>
                <h1 className="text-center text-6xl font-bold">Features</h1>
            </Container>
            <div className="grid lg:grid-cols-3 gap-6">
                {
                    features.map(feature => <div key={feature.feature_id} className="flex flex-col items-center border-b-4 border-green-400">
                        <h1 className="text-3xl text-green-600">{feature.feature_name}</h1>
                        <h3 className="text-xl">
                            {feature.feature_summary}
                        </h3>
                    </div>)
                }
                {/* <div>
                <h1>Variety of Exercises</h1>
                <h3>
                    Diverse range of workouts targeting strength, flexibility, and endurance.
                </h3>
            </div> */}
            </div>
        </div>
    )
}
