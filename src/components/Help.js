import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Help = () => {

    return (
        <div>
            <Header></Header>
            <div className="help">
                <section className="intro fullscreen">
                    <div className="container">
                        <div className="title row">
                            <div className="col-12">
                                <h2>Help</h2>
                            </div>
                        </div>
                        <div className="introContent">
                            <div className="p2 row">
                                <div className="col-6">
                                    <img src="./img/businessmanKey.svg" alt="businessman liking" />
                                </div>
                                <div className="col-6">
                                    <p>We are always here for help you.
                                        You can check the commonly asked questions
                                        and answers below.</p>
                                </div>
                            </div>
                            <div className="p1 row">
                                <div className="col-6">
                                    <p>If you have any other questions, you can ask us
                                        any time from our contact informationat the
                                        bottom of the page.</p>
                                </div>
                                <div className="col-6">
                                    <img src="./img/magnifyingGlass.svg" alt="businessman at conference" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="helpCommonlyAsked">
                    <div className="container">
                        <div className="title row">
                            <div className="col-12">
                                <h2>
                                    Commonly Asked
                                </h2>
                            </div>
                        </div>
                        <div className="qna">
                            <div className="messageSend">
                                <div className="buble">
                                    <p>
                                        What is Psikolojik Sorun ?
                                    </p>
                                </div>
                            </div>
                            <div className="messageReceive">
                                <div className="buble">
                                    <p>
                                        Psikolojik Sorun is online psychology platform which is adopting customer satisfaction as a principle.
                                    </p>
                                </div>
                            </div>
                            <div className="messageSend">
                                <div className="buble">
                                    <p>
                                        What does Psikolojik Sorun do?
                                    </p>
                                </div>
                            </div>
                            <div className="messageReceive">
                                <div className="buble">
                                    <p>
                                        Psikolojik Sorun makes it easy to meet psychologists
                                        and their patients over the internet.
                                    </p>
                                </div>
                            </div>
                            <div className="messageSend">
                                <div className="buble">
                                    <p>
                                        What is Psikolojik Sorun ?
                                    </p>
                                </div>
                            </div>
                            <div className="messageReceive">
                                <div className="buble">
                                    <p>
                                        Psikolojik Sorun is online psychology platform which is adopting customer satisfaction as a principle.
                                    </p>
                                </div>
                            </div>
                            <div className="messageSend">
                                <div className="buble">
                                    <p>
                                        What is Psikolojik Sorun ?
                                    </p>
                                </div>
                            </div>
                            <div className="messageReceive">
                                <div className="buble">
                                    <p>
                                        Psikolojik Sorun is online psychology platform which is adopting customer satisfaction as a principle.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Help;