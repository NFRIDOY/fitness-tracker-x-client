import { Outlet } from "react-router-dom";
import Container from "../../../components/Container/Container";
import Header1 from "../../../components/Headers/Header1";
import MemberNavs from "./MemberNavs";
import { Helmet } from "react-helmet";


export default function MemberDashboard() {
    return (
        <div>
            <Helmet>
                <title>Fitness Tracker | Member Dashboard </title>
            </Helmet>
            <Header1>
                Member Dashboard
            </Header1>
            <Container>
                <section className="flex flex-col  ">
                    <div className="w-fit mx-auto">
                        <MemberNavs></MemberNavs>
                    </div>
                    <div className="w-full">
                        <Outlet></Outlet>
                    </div>
                </section>
            </Container>
        </div>
    )
}
