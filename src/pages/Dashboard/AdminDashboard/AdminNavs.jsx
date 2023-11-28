import { NavLink } from "react-router-dom";
import AllSubs from './AllSubs';
// import AdminDashboard from "../AdminDashboard";

// const styleActive = {

// }

export default function AdminNavs() {
    const activeStyle = "bg-red-500 text-white py-4 w-full"

    return (
        <ul className="flex flex-row items-start gap-10 text-3xl bg-slate-300 py-4 w-full">
            <li>
                <NavLink
                    to="/Dashboard/AdminDashboard/AllSubs"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? activeStyle : ""
                    }
                >
                    All Subscribers
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/Dashboard/AdminDashboard/AllTrainers"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? activeStyle : ""
                    }
                >
                    All Trainers
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/Dashboard/AdminDashboard/AppliedTrainers"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? activeStyle : ""
                    }
                >
                    Applied Trainers
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/Dashboard/AdminDashboard/Balance"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? activeStyle : ""
                    }
                >
                    Balance
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/Dashboard/AdminDashboard/Forum"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? activeStyle : ""
                    }
                >
                    Forum
                </NavLink>
            </li>
        </ul>

    )
}
