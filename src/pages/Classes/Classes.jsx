import { Helmet } from "react-helmet";
import Header1 from "../../components/Headers/Header1";
import ClassesCardContainer from "../../components/ClassesCardContainer/ClassesCardContainer";


export default function Classes() {
    return (
        <div>
            <Helmet>
                <title>Fitness Tracker | Classes</title>
            </Helmet>
            {/* Classes Card Container */}
            <Header1>
                Classes
            </Header1>
            <section>
                <ClassesCardContainer></ClassesCardContainer>
            </section>
        </div>
    )
}
