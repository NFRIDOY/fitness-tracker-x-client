
import toast from 'react-hot-toast';
import useAuth from '../../hook/useAuth';
import useAxios from '../../hook/useAxios';
import Header1 from './../Headers/Header1';

export default function BeATrainer() {

    const { user } = useAuth()

    const axios = useAxios()

    const handleAddTrainer = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = user.email
        const fullName = form.FullName.value;
        const age = form.age.value;
        const description = form.description.value;
        const skills = form.skills.value;
        const minPrice = parseFloat(form.MinPrice.value);
        const maxPrice = parseFloat(form.MaxPrice.value);


        const newJob = {
            email,
            fullName,
            age,
            description,
            skills,
            minPrice,
            maxPrice
        }
        // Output
        console.log(newJob)
        // http://localhost:5000/api/v1/addJobs
        axios.post("/addJobs", newJob)
            .then(res => {
                console.log(res.data)
                if (res.data.acknowledged) {
                    toast.success('Successfully Added!')
                } else {
                    toast.error('Failed To Add!')
                }

            })

        // fetch("http://localhost:5000/api/v1/addJobs", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(newJob)
        // })
        // .then(res => res.json())
        // .then (data => {
        //     console.log(data)
        // })

    }

    return (
        <div className='flex'>
            <div className="w-1/2">
                <Header1>
                    Be A Trainer
                </Header1>
            </div>
            {
                user && <div className="w-1/2">
                    <form className="w-full space-y-3" onSubmit={handleAddTrainer}>
                        <div className='flex'>
                            <div className="w-full">
                                <label htmlFor="FullName" className="block mb-2 text-sm font-medium text-black ">Full Name</label>
                                <input type="text" name="FullName" id="FullName" className="input input-bordered w-full max-w-xs" placeholder="Job Title" required="" />
                            </div>
                            <div className="w-full">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-black ">Your Email <span>(Read Only)</span></label>
                                <input disabled defaultValue={user.email} type="email" name="email" id="email" className=" input input-bordered w-full max-w-xs" placeholder={user.email} required="" />
                            </div>
                        </div>
                        <div className='flex'>
                            <div className="w-full">
                                <label htmlFor="age" className="block mb-2 text-sm font-medium text-black ">Age</label>
                                <input type="date" name="age" id="age" className=" input input-bordered w-full max-w-xs" placeholder="Job Title" required="" />
                            </div>
                            <div className="w-full">
                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-black ">Description</label>
                                <textarea name="description" id="description" cols="30" rows="3" className=" input input-bordered w-full max-w-xs" placeholder="Description" required=""></textarea>
                                {/* <input type="text" name="description" id="description" className=" bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500" placeholder="Job Title" required="" /> */}
                            </div>
                        </div>
                        <div className="w-full">
                            <label htmlFor="Skills" className="block mb-2 text-sm font-medium text-black ">Skills</label>
                            <ul>
                                <li>
                                    <input type='checkbox' value="Fitness Knowledge" />
                                    <label htmlFor="item1">Fitness Knowledge</label>
                                </li>
                                <li>
                                    <input type='checkbox' value="Communication" />
                                    <label htmlFor="item1">Communication</label>
                                </li>
                                <li>
                                    <input type='checkbox' value="Problem-Solving" />
                                    <label htmlFor="item1">Problem-Solving</label>
                                </li>
                            </ul>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <label htmlFor="AvalableTimeInAWeek" className="block mb-2 text-sm font-medium text-black ">Avalable Time In A Week</label>
                                <input type="text" name="AvalableTimeInAWeek" id="AvalableTimeInAWeek" className=" input input-bordered w-full max-w-xs" placeholder="Avalable Time In A Week" required="" />
                            </div>
                            <div className="w-1/2">
                                <label htmlFor="AvalableTimeInADay" className="block mb-2 text-sm font-medium text-black ">Minimum Price</label>
                                <input type="text" name="AvalableTimeInADay" id="AvalableTimeInADay" className="input input-bordered w-full max-w-xs" placeholder="Avalable Time In A Day" required="" />
                            </div>
                        </div>
                        <div className='flex'>
                            <div className="w-1/2">
                                <label htmlFor="phone" className='block mb-2 text-sm font-medium text-black '>Phone Number</label>
                                <input type="tel" id="phone" name="phone" className='input input-bordered w-full max-w-xs' required />
                            </div>
                            <div className="w-1/2">
                                <label htmlFor="experience" className='block mb-2 text-sm font-medium text-black '>Years of Experience</label>
                                <input type="text" id="experience" name="experience" className='input input-bordered w-full max-w-xs' min="0" required />
                            </div>
                        </div>
                        <div className="w-full">
                            {/* <label htmlFor="yyyyy" className="block mb-2 text-sm font-medium text-black ">Your Job Title</label> */}
                            <input type="submit" name="submit" id="submit" className="w-full text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary hover:bg-primary focus:ring-primary-800" placeholder="Job Title" required="" />
                        </div>
                    </form>
                </div >
            }
            {
                console.log(user)
            }
        </div >
    )
}
