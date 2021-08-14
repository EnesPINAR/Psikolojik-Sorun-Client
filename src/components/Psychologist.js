import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom"

const Psychologist = (props) => {

    const [psychologist, setPsychologist] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        try {
            setPsychologist(props.children);
        } catch (error) {
            
        } finally {
            setLoading(false);
        }
    },[props.children]);

    if (loading) {
        return (
            <>
            </>
        )
    } else {
        console.log(psychologist)
        return (
            <div className="psychologist">
                <div className="psychologistHeader">
                    <img src={"http://localhost:5000/public/" + psychologist.profile_path} alt="profile photo" />
                    <h2>{psychologist.firstName} {psychologist.lastName}</h2>
                </div>
                <div className="psychologistContent">
                    <p>{psychologist.about}</p>
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

}

export default Psychologist;