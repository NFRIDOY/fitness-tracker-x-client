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
                <section className="flex flex-col bg-slate-200 ">
                    <div className="w-fit mx-auto">
                        <AdminNavs></AdminNavs>
                    </div>
                    <div className="w-full">
                        <Outlet></Outlet>
                    </div>
                </section>
            </Container>
        </div>
    )
}
