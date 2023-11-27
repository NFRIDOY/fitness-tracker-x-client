import { Outlet } from "react-router-dom";
import Header1 from "../../components/Headers/Header1";


export default function AdminDashboard() {
    return (
        <div>
            <Header1>
                Admin Dashboard
            </Header1>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    )
}
