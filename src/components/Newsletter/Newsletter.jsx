import { Link } from "react-router-dom";
import Container from "../Container/Container";
import Header1 from "../Headers/Header1";


export default function Newsletter() {
    return (
        <div className="py-10 bg-green-800">
            <Container>
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <h1 className="text-7xl font-bold">
                            <span className="text-white text-left">Subscribe </span>
                            <div className="text-white text-left">For Newsletter </div>
                        </h1>
                    </div>
                    <form className="space-y-4 md:space-y-6 w-2/5" >
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium  text-white">Your email</label>
                            <input type="email" name="email" id="email" className="border border-gray-300 sm:text-sm rounded-lg focus:ring-primary block w-full p-2.5 bg-gray-700  placeholder-gray-400 text-white  focus:border-blue-500" placeholder="name@mail.com" required="" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border  sm:text-sm rounded-lg block w-full p-2.5 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required="" />
                        </div>
                        <div className="flex justify-end">
                            <button className="btn btn-warning">Subscribe Now</button>
                        </div>

                        <p className="text-sm font-light text-gray-100">
                            No need tpo have an account. Need and account? <Link to={"/Registration"} href="#" className="font-medium  hover:underline text-white">Registration</Link>
                        </p>
                    </form>
                </div>
            </Container>
        </div>
    )
}
