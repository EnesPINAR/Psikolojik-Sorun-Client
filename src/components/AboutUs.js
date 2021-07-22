import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const AboutUs = () => {

    return (
        <div>
            <Header></Header>
            <div className="aboutUs">
                <div className="aboutUsIntro">
                    <img src="/img/About Us/Intro.svg" alt="We Are" />
                </div>
                <div className="aboutUsContainer">
                    <div className="aboutUsText">
                        <img className="desktopText" src="/img/About Us/Text.svg" alt="" />
                        <img className="mobileText" src="/img/About Us/TextMobile.svg" alt="" />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore amet deleniti inventore repellendus qui, a totam eligendi exercitationem soluta maxime earum labore dolores excepturi voluptas fugit delectus neque quo asperiores aliquam voluptates. Dolore laborum quae maxime rerum voluptas ratione minima.</p>
                    </div>
                    <div className="aboutUsThisIs">
                        <img src="/img/About Us/This is.svg" alt="" />
                    </div>
                    <div className="aboutUsEnding">
                        <img src="/img/About Us/Ending.svg" alt="" />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default AboutUs;