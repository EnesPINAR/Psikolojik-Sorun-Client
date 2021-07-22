import React from "react";
import {Link} from "react-router-dom"

const Psychologist = () => {
    return (
        <div className="psychologist">
            <div className="psychologistHeader">
                <img src="/img/profilephoto.svg" alt="" />
                <h2>Name Here</h2>
            </div>
            <div className="psychologistContent">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eos exercitationem excepturi expedita esse veniam corrupti?</p>
            </div>
            <div className="psychologistPrice">
                <div className="priceContainer">
                    <h2>
                        95 TL / Session
                    </h2>
                </div>
                <Link to="/Reservation">
                    <button className="btnType1">
                        Get Reservation
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Psychologist;