import React, { useEffect, useState } from "react";
import PS_API from "../helpers/PS_API";
import Psychologist from "./Psychologist";
import Loading from "./Loading";

const PsychologistsList = () => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        PS_API.get().then(
            (response) => {
                setData(response.data.psychologist);
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        ).finally(
            () => {
                setLoading(false);
            }
        )
    }, []);

    if (loading) {
        return (
            <Loading></Loading>
        )
    } else {

        return (
            <>
            {
                data.sort(() => {
                    return Math.random() - 0.5
                }).map((psychologist) => {
                    return (
                        <Psychologist key={psychologist._id}>{psychologist}</Psychologist>
                    )
                })
            }
            </>
        )

    }

}

export default PsychologistsList;