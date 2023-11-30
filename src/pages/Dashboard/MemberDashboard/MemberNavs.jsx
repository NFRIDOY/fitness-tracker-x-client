import { NavLink } from "react-router-dom";


export default function MemberNavs() {
    const activeStyle = "bg-red-500 text-white py-2 px-4 w-full rounded-lg"
    return (
        <ul className="flex flex-row items-start gap-10 text-3xl my-4 w-full ">
            <li>
                <NavLink
                    to="/Dashboard/MemberDashboard/ActivityLog"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? activeStyle : ""
                    }
                >
                    Activity Log
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/Dashboard/MemberDashboard/ProfileSettings"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? activeStyle : ""
                    }
                >
                    Profile Settings
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/Dashboard/MemberDashboard/RecommendedClassesPage"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? activeStyle : ""
                    }
                >
                    Recommended Classes Page
                </NavLink>
            </li>
            {/* <li>
                <NavLink
                    to="/Dashboard/MemberDashboard/AddClass"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? activeStyle : ""
                    }
                >
                    Extra Classes
                </NavLink> 
            </li>*/}

        </ul>
    )
}
