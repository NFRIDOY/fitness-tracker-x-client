import { Outlet } from "react-router-dom";
import Header1 from "../../components/Headers/Header1";
import AdminNavs from "./AdminDashboard/AdminNavs";
import Container from './../../components/Container/Container';


export default function AdminDashboard() {
    return (
        <div>
            <Header1>
                Admin Dashboard
            </Header1>
            <Container>
                <section className="flex bg-slate-200 ">
                    <div className="w-1/4">
                        <AdminNavs></AdminNavs>
                    </div>
                    <div className="w-3/4">
                        <Outlet></Outlet>
                    </div>
                </section>
            </Container>
        </div>
    )
}
