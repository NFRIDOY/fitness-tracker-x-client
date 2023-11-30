import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";

export default function TrainerCard({ trainerOne }) {

    const { _id,
        email,
        fullName,
        age,
        description,
        skills,
        week,
        day,
        fbLink,
        experience,
        role,
        photoURL,
        status } = trainerOne;

    console.log(trainerOne)
    return (
        <div>
            <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-lg p-4">
                <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                    <img
                        // src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                        src={photoURL}
                        alt="tania andrew"
                        className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
                    />
                    <div className="flex w-full flex-col gap-0.5">
                        <div className="flex items-center justify-between">
                            <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                {fullName}
                            </h5>
                            <div className="flex items-center gap-0 5">
                                <span className="italic">
                                    Year Of experience {experience} Years
                                </span>
                            </div>
                        </div>
                        <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
                            {role}
                        </p>
                    </div>
                </div>
                <div className="text-xl">
                    <p className="block font-sans antialiased font-light leading-relaxed text-blue-gray-900">
                        Avalable On Days: {week}
                    </p>
                    <p className="block font-sans antialiased font-light leading-relaxed text-blue-gray-900">
                        Avalable On Time: {day}
                    </p>

                </div>
                <div className="p-0 mb-6 my-6">
                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit italic">
                        {description}
                    </p>
                </div>
                <div className="flex justify-between items-center">
                    <Link to={fbLink} className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
                        <FaFacebook></FaFacebook>
                    </Link>
                    <Link to={`/Trainer/${_id}`} className="btn btn-primary text-white">
                        Know More
                    </Link>
                </div>
            </div>
        </div>
    )
}
