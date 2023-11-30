import toast from "react-hot-toast";
import useAxios from "../../hook/useAxios";
import Container from "../Container/Container";
import useAuth from "../../hook/useAuth";

export default function Newsletter() {
    const axios = useAxios()
    const { user } = useAuth()

    const handleSubscriber = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.Name.value;
        const email = form.email.value;

        const subscriber = {
            name,
            email,
        }
        console.log(subscriber)
        axios.post('/subscribers', subscriber)
            .then(res => {
                if (res.data.insertedId) {
                    console.log(res.data)
                    toast.success("Subscribed")
                    // toast.success("Welcome",subscriber.name)
                }
                else toast.error("Already Subscribed")
            })
    }

    return (
        <div className="py-10 bg-green-800">
            <Container>
                <div className="flex flex-col justify-between lg:flex-row">
                    <div className="flex items-center">
                        <h1 className="text-7xl font-bold">
                            <span className="text-white text-left">Subscribe </span>
                            <div className="text-white text-left">For Newsletter </div>
                        </h1>
                    </div>
                    <form className="space-y-4 md:space-y-6 w-full lg:w-2/5 mt-6 lg:mt-0" onSubmit={handleSubscriber}>
                        <div>
                            <label htmlFor="Name" className="block mb-2 text-sm font-medium text-white">Name</label>
                            {
                                user && <input type="text" name="Name" id="Name" className="bg-gray-50 border  sm:text-sm rounded-lg block w-full p-2.5 border-gray-600 text-black focus:ring-blue-500 focus:border-blue-500" placeholder={user.displayName} defaultValue={user.displayName} required="" />
                            }
                            {
                                !user && <input type="text" name="Name" id="Name" className="bg-gray-50 border  sm:text-sm rounded-lg block w-full p-2.5 border-gray-600 text-black focus:ring-blue-500 focus:border-blue-500" placeholder="Name" required="" />
                            }
                            
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium  text-white">Your Email</label>
                            {
                                user && <input type="email" name="email" id="email" className="border border-gray-300 sm:text-sm rounded-lg focus:ring-primary block w-full p-2.5  text-black  focus:border-blue-500" placeholder={user.email} defaultValue={user.email} required="" />
                            }
                            {
                                !user && <input type="email" name="email" id="email" className="border border-gray-300 sm:text-sm rounded-lg focus:ring-primary block w-full p-2.5  text-black  focus:border-blue-500" placeholder="Email" required="" />
                            }
                            {
                                user && <label htmlFor="email" className="block mb-2 text-sm font-medium  text-red-500">If it is Not Your Email Change It</label>
                            }
                        </div>

                        <div className="flex justify-end">
                            <button className="btn btn-warning">Subscribe Now</button>
                        </div>

                        {/* <p className="text-sm font-light text-gray-100">
                            No need to have an account. Need an account? <Link to={"/Registration"} href="#" className="font-medium  hover:underline text-white">Registration</Link>
                        </p> */}
                    </form>
                </div>
            </Container>
        </div>
    )
}
