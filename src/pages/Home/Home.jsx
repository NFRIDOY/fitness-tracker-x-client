import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Features from "../../components/Features/Features";
import Container from './../../components/Container/Container';
import Newsletter from "../../components/Newsletter/Newsletter";
import TrainerHighlites from "../../components/TrainerHighlites/TrainerHighlites";
import useAuth from "../../hook/useAuth";
import { useState } from "react";
import useAxios from "../../hook/useAxios";
import { useQuery } from "@tanstack/react-query";
import Header1 from "../../components/Headers/Header1";
import TrainerCard from "../../components/TrainerCard/TrainerCard";
import LoadingAnimations from "../../components/LoadingAnimations/LoadingAnimations";
import { Helmet } from "react-helmet";


export default function Home() {

    const { user } = useAuth()
    const [trainers, setTrainers] = useState();
    const axios = useAxios();
    const status = "confirmation";
    const { isPending, error, data: alltrainers, refetch } = useQuery({
        queryKey: ['trainers3'],
        queryFn: () =>
            axios.get(`/trainers?status=${status}`).then(
                (res) => {
                    console.log(res.data)
                    // console.log(alltrainers)
                    setTrainers(res.data)
                },
            ),
    })

    if (isPending) return <LoadingAnimations></LoadingAnimations>
    return (
        <div>
            <Helmet>
                <title>Fitness Tracker | Home</title>
            </Helmet>
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
                <Header1>
                    Trainers
                </Header1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full'>
                    {
                        trainers.slice(0, 3).map((trainerOne) => <TrainerCard key={trainerOne?._id} trainerOne={trainerOne}></TrainerCard>)
                    }
                </div>
            </Container>

        </div>
    )
}
