import { Outlet } from "react-router-dom";
import Container from "../../../components/Container/Container";
import Header1 from "../../../components/Headers/Header1";
import TrainerNavs from "./TrainerNavs";
import { Helmet } from "react-helmet";


export default function TrainerDashboard() {
    return (
        <div>
            <Helmet>
                <title>Fitness Tracker | Trainers Dashboard</title>
            </Helmet>
            <Header1>
                Trainer Dashboard
            </Header1>
            <Container>
                <section className="flex flex-col  ">
                    <div className="w-fit mx-auto">
                        <TrainerNavs></TrainerNavs>
                    </div>
                    <div className="w-full">
                        <Outlet></Outlet>
                    </div>
                </section>
            </Container>
        </div>
    )
}
