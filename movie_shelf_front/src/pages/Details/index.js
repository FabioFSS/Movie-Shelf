// react
import React, { useState, useEffect } from "react";

// styles
import "./styles.css";

import useAxios from "../../utils/useAxios";

// components
import DetailMovie from "../../components/scripts/DetailMovie";
import Trailer from "../../components/scripts/Trailer";

export default function Details() {
    const [movieId] = useState(window.location.href.split("=")[1]);
    const [background, setBackground] = useState(null);
    const [trailerId, setTrailerId] = useState(null);
    const [details, setDetails] = useState(null);
    const [reiews, setReviews] = useState(null);
    const [poster, setPoster] = useState(null);

    const api = useAxios();

    useEffect(() => {
        api.get(`/detailsmovie/${movieId}`).then((res) => {

            setDetails(res.data[0].details);

            setReviews(res.data[0].casts.slice(0, 5));

            setBackground(
                `https://image.tmdb.org/t/p/original/${res.data[0].backdrop}`
            );

            setPoster(
                `https://image.tmdb.org/t/p/w342/${res.data[0].poster}`
            );

            setTrailerId(res.data[0].trailer_id);

        });
    }, [movieId]);

    window.scrollTo({
        top: 0,
    });

    return (
        <div className="wrapper-details">
            <div
                className="backgrundImg"
                style={{ backgroundImage: `url(${background})` }}
            />
            <DetailMovie details={details} poster={poster} reiews={reiews} />
            <Trailer trailerId={trailerId} />
        </div>
    );
}
