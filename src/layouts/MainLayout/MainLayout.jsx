import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Container from "../../components/Container/Container";


export default function MainLayout() {
    return (
        <div className="relative">
            <div className="mx-auto max-w-7xl">
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <div className="relative bottom-0">
                <Footer></Footer>
            </div>
        </div>
    )
}
