
import toast from 'react-hot-toast';
import useAuth from '../../hook/useAuth';
import useAxios from '../../hook/useAxios';
import Header1 from './../Headers/Header1';
import Container from '../../components/Container/Container';
import ToggleDays from '../WeekDayPicker/ToggleDays';
import { useState } from 'react';
import moment from 'moment/moment';
import WeekDaysCheckbox from '../WeekDaysCheckbox/WeekDaysCheckbox';
import AvailableTime from '../AvailableTime/AvailableTime';
import Skills from '../Skills/Skills';

export default function BeATrainer() {
    const [days, setDays] = useState([]);
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [selectedDays, setSelectedDays] = useState([]);
    // const [timeStart, setTimeStart] = useState();
    // const [timeEnd, setTimeEnd] = useState();
    const [selectedTimes, setSelectedTimes] = useState([]);

    const { user } = useAuth()

    const axios = useAxios()

    const handleAddTrainer = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = user.email
        const fullName = form.FullName.value;
        const age = parseInt(form.age.value);
        const description = form.description.value;
        // const skills = form.skills.value || [];
        // const skills = [];
        const skills = selectedSkills;
        // const week = form.AvalableTimeInAWeek.value;
        const week = selectedDays;
        const day = form.AvalableTimeInADay.value;
        const fbLink = form.fbLink.value;
        const experience = form.experience.value;
        const photoURL = form.photoURL.value;

        const newTrainer = {
            email,
            fullName,
            age,
            description,
            skills,
            // checkboxValues, // skills array
            week,
            // week: days,
            day,
            fbLink,
            experience,
            photoURL,
            role: 'member',
            status: "pending"
        }
        // Output
        console.log(newTrainer)
        // http://localhost:5000/api/v1/addJobs
        axios.put("/trainers", newTrainer)
            .then(res => {
                console.log(res.data)
                if (res.data.acknowledged) {
                    toast.success('Successfully Added!')
                } else {
                    toast.error('Failed To Add!')
                }
            })
    }
    // console.log(checkboxValues)

    // const test123 = moment().format('d');
    // console.log(test123);
    console.log(selectedDays)
    return (
        <Container>
            <div className='flex flex-col lg:flex-row'>
                <div className="w-full lg:w-1/2 p-0 m-0">
                    <Header1>
                        Be A Trainer
                    </Header1>
                </div>
                {
                    user && <div className="w-full lg:w-1/2 px-10 lg:p-0">
                        <form className="w-full space-y-3" onSubmit={handleAddTrainer}>
                            <div className='flex flex-col lg:flex-row gap-4 justify-between'>
                                <div className="w-full">
                                    <label htmlFor="FullName" className="block mb-2 text-sm font-medium text-black ">Full Name</label>
                                    <input type="text" name="FullName" id="FullName" className="input input-bordered w-full max-w-xs" placeholder="Full Name" required="" />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-black ">Your Email <span>(Read Only)</span></label>
                                    <input disabled defaultValue={user.email} type="email" name="email" id="email" className=" input input-bordered w-full max-w-xs" placeholder={user.email} required="" />
                                </div>
                            </div>
                            <div className='flex flex-col lg:flex-row gap-4'>
                                <div className="w-full">
                                    <label htmlFor="age" className="block mb-2 text-sm font-medium text-black ">Age</label>
                                    <input type="number" name="age" id="age" className=" input input-bordered w-full max-w-xs" placeholder="Age" required="" />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-black ">Description</label>
                                    <textarea name="description" id="description" cols="30" rows="3" className=" input input-bordered w-full max-w-xs" placeholder="Description" required=""></textarea>
                                    {/* <input type="text" name="description" id="description" className=" bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500" placeholder="Job Title" required="" /> */}
                                </div>
                            </div>
                            <div className="w-full">
                                <label htmlFor="Skills" className="block mb-2 text-sm font-medium text-black ">Skills</label>
                                {/*<ul>
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
                                </ul> */}
                                <Skills selectedSkills={selectedSkills} setSelectedSkills={setSelectedSkills}></Skills>
                            </div>
                            <div className="w-full">
                                <label htmlFor="AvalableTimeInAWeek" className="block mb-2 text-sm font-medium text-black ">Avalable Time In A Week</label>
                                {/* <input type="text" name="AvalableTimeInAWeek" id="AvalableTimeInAWeek" className=" input input-bordered w-full max-w-xs" placeholder="Avalable Time In A Week" required="" /> */}

                                {/* <ToggleDays days={days} setDays={setDays}></ToggleDays> */}

                                <WeekDaysCheckbox selectedDays={selectedDays} setSelectedDays={setSelectedDays}></WeekDaysCheckbox>

                            </div>
                            <div className="flex gap-4 ">
                                <div className="w-full">
                                    <label htmlFor="AvalableTimeInADay" className="block mb-2 text-sm font-medium text-black ">Avalable Time In A Day</label>
                                    {/* <input type="text" name="AvalableTimeInADay" id="AvalableTimeInADay" className="input input-bordered w-full max-w-xs" placeholder="Avalable Time In A Day" required="" /> */}
                                    {/* <AvailableTime timeStart={timeStart} setTimeStart={setTimeStart} timeEnd={timeEnd} setTimeEnd={setTimeEnd}></AvailableTime> */}
                                    <AvailableTime selectedTimes={selectedTimes} setSelectedTimes={setSelectedTimes}></AvailableTime>
                                </div>
                            </div>
                            <div className='flex gap-4 justify-between'>
                                <div className="w-1/2">
                                    <label htmlFor="fbLink" className='block mb-2 text-sm font-medium text-black '>Facebook Link</label>
                                    <input type="text" id="fbLink" name="fbLink" className='input input-bordered w-full max-w-xs' placeholder="Facebook Link" required />
                                </div>
                                <div className="w-1/2 gap-4">
                                    <label htmlFor="experience" className='block mb-2 text-sm font-medium text-black '>Years of Experience</label>
                                    <input type="number" id="experience" name="experience" className='input input-bordered w-full max-w-xs' min="0" placeholder="Experience" required />
                                </div>
                            </div>
                            <div className="w-1/2 gap-4">
                                <label htmlFor="photoURL" className='block mb-2 text-sm font-medium text-black '>Your Photo URL</label>
                                <input type="text" id="photoURL" name="photoURL" className='input input-bordered w-full max-w-xs' min="0" placeholder="photo URL" required />
                            </div>
                            <div className="w-96 mx-auto">
                                {/* <label htmlFor="yyyyy" className="block mb-2 text-sm font-medium text-black ">Your Job Title</label> */}
                                {/* <input type="submit" name="submit" id="submit" className="input input-bordered w-full max-w-xs bg-green-500 hover:bg-green-600 border-2 border-green-600 text-white font-bold " placeholder="Submit" required="" /> */}
                                {
                                    // (checkboxValues.length && selectedDays.length && email && fullName && age && description && day && fbLink && experience && photoURL) ? <button type="submit" name="submit" id="submit" className="input input-bordered w-full max-w-xs bg-green-500 hover:bg-green-600 border-2 border-green-600 text-white font-bold ">
                                    (selectedSkills.length && selectedDays.length) ? <button type="submit" name="submit" id="submit" className="input input-bordered w-full max-w-xs bg-green-500 hover:bg-green-600 border-2 border-green-600 text-white font-bold ">
                                        Apply
                                    </button> : null
                                }
                            </div>
                        </form>
                    </div >
                }
                {
                    console.log(user)
                }
            </div >
        </Container>
    )
}
