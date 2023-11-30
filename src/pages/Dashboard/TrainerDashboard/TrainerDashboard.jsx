import { Outlet } from "react-router-dom";
import Container from "../../../components/Container/Container";
import Header1 from "../../../components/Headers/Header1";
import TrainerNavs from "./TrainerNavs";


export default function TrainerDashboard() {
    return (
        <div>
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
