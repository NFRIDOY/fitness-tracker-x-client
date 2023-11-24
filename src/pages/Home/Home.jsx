import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Features from "../../components/Features/Features";
import Container from './../../components/Container/Container';
import Newsletter from "../../components/Newsletter/Newsletter";


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
            {/* Todo :  Featured classes: */}
            {/* Todo :  Testimonials */}
            {/* Blog or Latest Articles */}
            {/* Newsletter Subscribers */}
            <Newsletter></Newsletter>
            <Container>
            
            </Container>
        </div>
    )
}
