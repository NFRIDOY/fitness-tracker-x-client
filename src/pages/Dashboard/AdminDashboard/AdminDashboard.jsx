import { Outlet } from "react-router-dom";
import Header1 from "../../../components/Headers/Header1";
import AdminNavs from "./AdminNavs";
import Container from '../../../components/Container/Container';
import { Helmet } from "react-helmet";


export default function AdminDashboard() {
    return (
        <div>
            <Helmet>
                <title>Fitness Tracker | Admin</title>
            </Helmet>
            <Header1>
                Admin Dashboard
            </Header1>
            <Container>
                <section className="flex flex-col  ">
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
