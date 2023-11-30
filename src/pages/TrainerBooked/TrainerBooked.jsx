import { Helmet } from "react-helmet";
import TrainersPlans from "../../components/TrainersPlans/TrainersPlans";
import Header1 from "./../../components/Headers/Header1";

export default function TrainerBooked() {
    return (
        <div>
            <Helmet>
                <title></title>
            </Helmet>
            <Header1>Your Trainer is Booked Select Your Plan</Header1>
            <section className="mx-max-w-lg">
                <TrainersPlans></TrainersPlans>
            </section>
        </div>
    );
}
