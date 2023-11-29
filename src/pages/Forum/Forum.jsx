import Header1 from './../../components/Headers/Header1';
import { useEffect, useState } from 'react';
import useAxios from '../../hook/useAxios';
import useAuth from '../../hook/useAuth';
import LoadingAnimations from './../../components/LoadingAnimations/LoadingAnimations';
import toast from 'react-hot-toast';


export default function Forum() {
    const [dashboardUser, setDashboardUser] = useState()
    const axios = useAxios();
    const { user } = useAuth();
    useEffect(() => {
        axios.get(`/dashboard?email=${user.email}`)
            .then(res => {
                setDashboardUser(res.data.role)
                // console.log(res.data.role)
            })
    }, [])

    const handleForum = (e) => {
        e.preventDefault();
        const form = e.target;
        const fullName = user.displayName;
        const role = dashboardUser;
        const email = user.email;
        const text = form.text.value;

        const date = new Date();

        const forum = {
            fullName,
            role,
            email,
            text,
            date,
            upVotes: 0,
            downVote: 0
        }
        console.log(forum);

        axios.post("/forums", forum)
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
        <div>
            <form onSubmit={handleForum} className="border-8 card w-96 bg-base-100 shadow-xl mx-auto my-32">               <div className="card-body">
                {/* <h2 className="card-title">Your Name: {user.displayName}</h2>
                    <h2 className="card-title text-gray-300">{dashboardUser}</h2> */}
                <p>
                    {/* <input type="text" placeholder="Type here"  /> */}
                    {/* <textarea name="" id="" cols="30" rows="10" className="h-40 input input-bordered w-full max-w-xs" ></textarea> */}
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text card-title">Your Name: {user.displayName}</span>
                            <span className="label-text-alt italic">Your Are: {dashboardUser}</span>
                        </div>
                        <textarea name='text' id='text' className="textarea textarea-bordered h-24" placeholder="Type here"></textarea>
                        <div className="label">
                            <span className="label-text-alt italic">Email: {user.email}</span>
                            <span className="label-text-alt text-primary">Share Your Thoughts</span>
                        </div>
                    </label>
                </p>
                <div className="card-actions justify-end">
                    <button type='submit' className="btn btn-primary text-white">Submit</button>
                </div>
            </div>
            </form>
        </div>
    )
}
