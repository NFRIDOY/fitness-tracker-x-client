import { data } from "autoprefixer"
import { useEffect, useState } from "react"
import Container from "../Container/Container"
import Header1 from "../Headers/Header1"


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
            <Header1>Features</Header1>
            <div className="grid lg:grid-cols-3 gap-6">
                {
                    features.map(feature => <div key={feature.feature_id} className="flex flex-col items-center justify-center text-center border-b-4 border-green-400">
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
