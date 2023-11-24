import Container from "../Container/Container";

export default function Newsletter() {

    const handleSubscriber = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
    }

    return (
        <div className="py-10 bg-green-800">
            <Container>
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <h1 className="text-7xl font-bold">
                            <span className="text-white text-left">Subscribe </span>
                            <div className="text-white text-left">For News Letter </div>
                        </h1>
                    </div>
                    <form className="space-y-4 md:space-y-6 w-2/5" onSubmit={handleSubscriber}>
                        <div>
                            <label htmlFor="Name" className="block mb-2 text-sm font-medium text-white">Name</label>
                            <input type="text" name="Name" id="Name" placeholder="Name" className="bg-gray-50 border  sm:text-sm rounded-lg block w-full p-2.5 border-gray-600 text-black focus:ring-blue-500 focus:border-blue-500" required="" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium  text-white">Your email</label>
                            <input type="email" name="email" id="email" className="border border-gray-300 sm:text-sm rounded-lg focus:ring-primary block w-full p-2.5  text-black  focus:border-blue-500" placeholder="name@mail.com" required="" />
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
