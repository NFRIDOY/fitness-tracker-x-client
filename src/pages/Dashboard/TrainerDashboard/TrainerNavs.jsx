import { NavLink } from "react-router-dom";


export default function TrainerNavs() {
    const activeStyle = "bg-red-500 text-white py-2 px-4 w-full rounded-lg"
    return (
        <ul className="flex flex-row items-start gap-10 text-3xl my-4 w-full ">
            {/* <li>
                <NavLink
                    to="/Dashboard/TrainerDashbord/ManageSlots"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? activeStyle : ""
                    }
                >
                    ManageSlots
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/Dashboard/TrainerDashbord/Member"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? activeStyle : ""
                    }
                >
                    Manage Member
                </NavLink>
            </li> */}
            <li>
                <NavLink
                    to="/Dashboard/TrainerDashbord/Forum"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? activeStyle : ""
                    }
                >
                    Forum
                </NavLink>
            </li>
            {/* <li>
                <NavLink
                    to="/Dashboard/TrainerDashbord/AddClass"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? activeStyle : ""
                    }
                >
                    Add New Class
                </NavLink>
            </li> */}
            
        </ul>
    )
}
