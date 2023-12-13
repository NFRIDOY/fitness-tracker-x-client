import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Container from "../../components/Container/Container";


export default function MainLayout() {
    return (
        <div className="relative ">
            <div className="mx-auto h-[130px] max-w-7xl">
                <Navbar></Navbar>
            </div>
            <div className="min-h-[100vh]">
            {/* <div className="min-h-[calc(100vh - 130px)]"> */}
                <Outlet></Outlet>
            </div>
            <div className="mb-0">
                <Footer></Footer>
            </div>
        </div>
    )
}
