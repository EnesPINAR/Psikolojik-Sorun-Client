import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Psychologist from "./Psychologist";

const Appointments = () => {

    return (
        <div>
            <Header></Header>
            <div className="appointments">
                <section className="intro fullscreen">
                    <div className="container">
                        <div className="title row">
                            <div className="col-12">
                                <h2>Appointments</h2>
                            </div>
                        </div>
                        <div className="introContent">
                            <div className="p2 row">
                                <div className="col-6">
                                    <img src="/img/businessmanBlind.svg" alt="businessman liking" />
                                </div>
                                <div className="col-6">
                                    <p>It's so easy to get an appointment at Psikolojik Sorun.
                                        You can even do it with your eyes closed.</p>
                                </div>
                            </div>
                            <div className="p1 row">
                                <div className="col-6">
                                    <p>All you have to do is choose the psychologist you want below.</p>
                                </div>
                                <div className="col-6">
                                    <img src="/img/businessmanCV.svg" alt="businessman at conference" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="appointmentsPsychologists">
                    <div className="container">
                        <div className="title row">
                            <div className="col-12">
                                <h2>Psychologists</h2>
                            </div>
                        </div>
                        <div className="psychologists">
                            <Psychologist></Psychologist>
                            <Psychologist></Psychologist>
                            <Psychologist></Psychologist>
                            <Psychologist></Psychologist>
                            <Psychologist></Psychologist>
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

export default Appointments;