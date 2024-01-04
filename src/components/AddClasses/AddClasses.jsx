import { useEffect, useState } from "react";
import useAxios from "../../hook/useAxios";
import useAuth from "../../hook/useAuth";
import toast from "react-hot-toast";
import WeekDaysCheckbox from "../WeekDaysCheckbox/WeekDaysCheckbox";
import AvailableTime from "../AvailableTime/AvailableTime";


export default function AddClasses() {

    const { user } = useAuth()

    const axios = useAxios()

    const [dashboardUser, setDashboardUser] = useState({});
    // const [selectedSkills, setSelectedSkills] = useState([]);
    // const [timeStart, setTimeStart] = useState();
    // const [timeEnd, setTimeEnd] = useState();
    // TODO Load time from DB
    // const timesInDay = ['7:00 AM-8:00 AM', '8:00 AM-9:00 AM', '9:00 AM-10:00 AM', '10:00 AM-11:00 AM', '11:00 AM-12:00 PM', '12:00 PM-1:00 PM', '1:00 PM-2:00 PM', '2:00 PM-3:00 PM', '3:00 PM-4:00 PM', '4:00 PM-5:00 PM', '5:00 PM-6:00 PM', '6:00 PM-7:00 PM', '7:00 PM-8:00 PM', '8:00 PM-9:00 PM', '9:00 PM-10:00 PM', '10:00 PM-11:00 PM'];
    let timesInDay = ['7:00 AM-8:00 AM', '8:00 AM-9:00 AM', '9:00 AM-10:00 AM', '10:00 AM-11:00 AM', '11:00 AM-12:00 PM', '12:00 PM-1:00 PM', '1:00 PM-2:00 PM', '2:00 PM-3:00 PM', '3:00 PM-4:00 PM', '4:00 PM-5:00 PM', '5:00 PM-6:00 PM', '6:00 PM-7:00 PM', '7:00 PM-8:00 PM', '8:00 PM-9:00 PM', '9:00 PM-10:00 PM', '10:00 PM-11:00 PM'];
    // TODO Load Data from DB 
    // const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const [selectedDays, setSelectedDays] = useState(daysOfWeek);
    const [selectedTimes, setSelectedTimes] = useState(timesInDay);

    useEffect(() => {
        axios.get(`/availableClassTimes?email=${user.email}`)
            .then((res) => {
                console.log(res.data.weeklyDays);
                console.log(res.data.timesInDay);
                daysOfWeek = res.data.weeklyDays;
                timesInDay = res.data.timesInDay;

                setSelectedDays(res.data.weeklyDays);
                setSelectedTimes(res.data.timesInDay);
            })
        axios.get(`/users?email=${user.email}`)
            .then((res) => {
                console.log(res.data);

                setDashboardUser(res.data);

            })
    }, [])



    const handleAddTrainer = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = user.email
        const className = form.className.value;
        // const age = parseInt(form.age.value);
        const description = form.description.value;
        // const skills = form.skills.value || [];
        // const skills = [];
        // const skills = selectedSkills;
        // const week = form.AvalableTimeInAWeek.value;
        const weeklyDays = selectedDays;
        const timesInDay = selectedTimes;
        // const day = form.AvalableTimeInADay.value;
        // const fbLink = form.fbLink.value;
        // const experience = form.experience.value;
        // const photoURL = form.photoURL.value;

        const newClass = {
            email,
            className,
            // age,
            description,
            // skills,
            // checkboxValues, // skills array
            // week: days,
            weeklyDays,
            timesInDay,
            // fbLink,
            // experience,
            // photoURL,
            role: dashboardUser.role,
            status: dashboardUser.status
        }
        // Output
        console.log(newClass)
        // http://localhost:5000/api/v1/classes
        axios.post(`/classes`, newClass)
            .then(res => {
                console.log(res.data)
                if (res.data.acknowledged) {
                    toast.success('Successfully Added!')
                } else {
                    toast.error('Failed To Add!')
                }
            })
    }

    return (
        <form className="w-full space-y-3 mt-5" onSubmit={handleAddTrainer}>
            <div className='flex flex-col lg:flex-row gap-4 justify-between'>
                <div className="w-full">
                    <label htmlFor="className" className="block mb-2 text-sm font-medium text-black ">Class Name</label>
                    <input type="text" name="className" id="className" className="input input-bordered w-full max-w-xs" placeholder="Class Name" required="" />
                </div>
                <div className="w-full">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-black ">Your Email <span>(Read Only)</span></label>
                    <input disabled defaultValue={user.email} type="email" name="email" id="email" className=" input input-bordered w-full max-w-xs" placeholder={user.email} required="" />
                </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-4'>
                {/* <div className="w-full">
                    <label htmlFor="age" className="block mb-2 text-sm font-medium text-black ">Age</label>
                    <input type="number" name="age" id="age" className=" input input-bordered w-full max-w-xs" placeholder="Age" required="" />
                </div> */}
                <div className="w-full">
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-black ">Description</label>
                    <input name="description" id="description" cols="30" rows="3" className=" input input-bordered w-full max-w-xs" placeholder="Description" required=""></input>
                    {/* <input type="text" name="description" id="description" className=" bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500" placeholder="Job Title" required="" /> */}
                </div>
            </div>

            <div className="w-full">
                <label htmlFor="AvalableTimeInAWeek" className="block mb-2 text-sm font-medium text-black ">Avalable Time In A Week</label>
                {/* <input type="text" name="AvalableTimeInAWeek" id="AvalableTimeInAWeek" className=" input input-bordered w-full max-w-xs" placeholder="Avalable Time In A Week" required="" /> */}

                {/* <ToggleDays days={days} setDays={setDays}></ToggleDays> */}

                <WeekDaysCheckbox selectedDays={selectedDays} setSelectedDays={setSelectedDays} daysOfWeek={daysOfWeek}></WeekDaysCheckbox>

            </div>
            <div className="flex gap-4 ">
                <div className="w-full">
                    <label htmlFor="ClassTime" className="block mb-2 text-sm font-medium text-black ">Class Time</label>
                    {/* <input type="text" name="AvalableTimeInADay" id="AvalableTimeInADay" className="input input-bordered w-full max-w-xs" placeholder="Avalable Time In A Day" required="" /> */}
                    {/* <AvailableTime timeStart={timeStart} setTimeStart={setTimeStart} timeEnd={timeEnd} setTimeEnd={setTimeEnd}></AvailableTime> */}
                    <AvailableTime selectedTimes={selectedTimes} setSelectedTimes={setSelectedTimes} timesInDay={timesInDay}></AvailableTime>
                </div>
            </div>
            {/* <div className='flex gap-4 justify-between'>
                <div className="w-1/2">
                    <label htmlFor="fbLink" className='block mb-2 text-sm font-medium text-black '>Facebook Link</label>
                    <input type="text" id="fbLink" name="fbLink" className='input input-bordered w-full max-w-xs' placeholder="Facebook Link" required />
                </div>
                <div className="w-1/2 gap-4">
                    <label htmlFor="experience" className='block mb-2 text-sm font-medium text-black '>Years of Experience</label>
                    <input type="number" id="experience" name="experience" className='input input-bordered w-full max-w-xs' min="0" placeholder="Experience" required />
                </div>
            </div> */}
            {/* <div className="w-1/2 gap-4">
                <label htmlFor="photoURL" className='block mb-2 text-sm font-medium text-black '>Your Photo URL</label>
                <input type="text" id="photoURL" name="photoURL" className='input input-bordered w-full max-w-xs' min="0" placeholder="photo URL" required />
            </div> */}
            <div className="w-96 mx-auto ">
                <button type="submit" name="submit" id="submit" className="input input-bordered w-full max-w-xs bg-green-500 hover:bg-green-600 border-2 border-green-600 text-white font-bold mt-12">
                    Apply
                </button>
            </div>
        </form>
    )
}
