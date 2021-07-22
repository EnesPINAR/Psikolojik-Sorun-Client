import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Psychologist from "./Psychologist";

const Home = () => {

    return (
        <div>
            <Header></Header>
            <div className="home">
                <section className="homeWelcome fullscreen">
                    <div className="container">
                        <div className="welcomeText">
                            <p>Welcome to Psikolojik Sorun</p>
                        </div>
                        <img src="img/welcomebackground.svg" alt="" />
                        <div className="slideForMore">
                            <p>Slide for more</p>
                            <img src="/img/slide.svg" alt="" />
                        </div>
                    </div>
                </section>
                <section className="intro fullscreen">
                    <div className="container">
                        <div className="introContent">
                            <div className="p1 row">
                                <div className="col-6">
                                    <p>Psikolojik Sorun is online psychology platform
                                        which is adopting customer satisfaction as a principle.</p>
                                </div>
                                <div className="col-6">
                                    <img src="./img/businessmanLiking.svg" alt="businessman liking" />
                                </div>
                            </div>
                            <div className="p2 row">
                                <div className="col-6">
                                    <img src="./img/businessmanOnline.svg" alt="businessman at conference" />
                                </div>
                                <div className="col-6">
                                    <p>Psikolojik Sorun makes it easy to meet psychologists
                                        and their patients over the internet.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="homePricing">
                    <div className="container">
                        <div className="title row">
                            <div className="col-12">
                                <h2>Pricing</h2>
                            </div>
                        </div>
                        <div className="titleDescription row">
                            <div className="col-12">
                                <div className="descriptionContainer">
                                    <p>In Psikolojik Sorun, our each psychologist sets his own price.
                                        Here are some of our psychologists.</p>
                                </div>
                            </div>
                        </div>
                        <div className="psychologists">
                            <Psychologist></Psychologist>
                            <Psychologist></Psychologist>
                            <Psychologist></Psychologist>
                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Home;