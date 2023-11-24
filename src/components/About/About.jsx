import Header1 from "../Headers/Header1";



export default function About() {
    return (
        <div>
            <Header1>
                About
            </Header1>
            <section className="flex">
                <div className="w-1/2">
                    <h2 className="font-bold text-2xl underline">
                        Our Commitment
                    </h2>
                    <p >
                        We are committed to revolutionizing the way you approach fitness. Our platform offers
                        <ul>
                            <li>
                                <h3 className="font-bold">
                                    Select Trainer
                                </h3>
                                Tailored fitness plans and detailed progress tracking to suit your unique goals.
                            </li>
                            <li>
                                <h3 className="font-bold">
                                    Comprehensive Insights
                                </h3>
                                In-depth analysis and insights into your workouts, nutrition, and overall wellness.
                            </li>
                            <li>
                                <h3 className="font-bold">
                                    Community Engagement
                                </h3>
                                Connect and engage with a vibrant community, sharing experiences, tips, and motivation.
                            </li>
                        </ul>
                    </p>
                </div>
                <div className="w-1/2 text-right">
                    <h2 className="font-bold text-2xl text-right underline">
                        What Sets Us Apart
                    </h2>
                    <p >
                        We are committed to revolutionizing the way you approach fitness. Our platform offers
                        <ul>
                            <li>
                                <h3 className="font-bold">
                                    User-Centric Approach
                                </h3>
                                Your needs are at the core of everything we do. We continually enhance our features based on user feedback and industry advancements.
                            </li>
                            <li>
                                <h3 className="font-bold">
                                    Cutting-Edge Technology
                                </h3>
                                We utilize the latest technology to ensure a seamless and intuitive user experience, making your fitness journey hassle-free
                            </li>

                        </ul>
                    </p>
                </div>
            </section>
            <section>
                <h2 className="text-3xl font-semibold my-6 text-center">Our Vision</h2>
                <p className="text-center text-2xl">
                    We envision a world where fitness is not just a goal but a way of life. Whether you're a beginner or a seasoned fitness enthusiast, [Website Name] is here to support and guide you every step of the way.

                    Join us and embark on a transformative fitness adventure today!
                </p>
            </section>
        </div>
    )
}
