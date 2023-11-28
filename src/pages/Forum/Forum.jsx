import useAuth from "../../hook/useAuth"


export default function Forum() {
    const {user} = useAuth();
    // const 
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto my-32">
                <div className="card-body">
                    <h2 className="card-title">Your Name: </h2>
                    <h2 className="card-title">Your Name: </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
