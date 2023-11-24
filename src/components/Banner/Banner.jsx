import { Link } from "react-router-dom";


export default function Banner() {
    return (
        <div className="relative">
            <img className="object-cover w-full rounded-3xl h-[500px] brightness-50" src="https://plus.unsplash.com/premium_photo-1669021454166-c68562603897?q=80&w=2005&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            {/* <img className="object-cover w-full rounded-3xl h-96 brightness-50" src="https://images.unsplash.com/photo-1573495782952-e42bd3ea5a4d?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
            {/* <img className="object-cover w-full rounded-3xl h-96 brightness-50" src="https://images.unsplash.com/photo-1635350736475-c8cef4b21906?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
            {/* <div className="absolute top-20 left-8 font-bold flex flex-col justify-center items-start"> */}
            <div className="absolute top-20 right-8 font-bold flex flex-col justify-center items-start">
                <h1 className="uppercase text-white text-5xl text-center ">
                    {/* 
                    Choose the best triner for your fitness */}
                    Choose The Best<span className="text-green-400 font-extrabold"> Triner</span> <br />
                    For Your <span className="text-black  font-extrabold">Fitness!!!</span>
                </h1>
                <h4>

                </h4>
                <div className="relative left-44">
                    <div className="flex gap-x-6 justify-end pt-4">
                        <Link to={"/Classes"} className="btn btn-success bg-green-400 text-black ">
                            Classes
                        </Link>
                        {/* <Link to={"/Login"} className="btn btn-ghost btn-outline  text-white ">
                            Login
                        </Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
}