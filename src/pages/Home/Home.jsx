import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Container from "../../components/Container/Container";
import Features from "../../components/Features/Features";


export default function Home() {
    return (
        <div>
            <section>
                <Banner></Banner>
            </section>
            <Container>
                <section className="Features">
                    <Features></Features>
                </section>
            </Container>
            <Container>
                <About></About>
            </Container>
        </div>
    )
}
