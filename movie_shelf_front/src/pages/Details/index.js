import React, { useState, useEffect } from "react";
import axios from "axios";
import { api, apiKey, language } from "../../services/api";
import DetailMovie from "../../components/scripts/DetailMovie";
import Trailer from "../../components/scripts/Trailer";
import "./styles.css";

export default function Details() {
    const [movieId] = useState(window.location.href.split("=")[1]);
    const [background, setBackground] = useState(null);
    const [trailerId, setTrailerId] = useState(null);
    const [details, setDetails] = useState(null);
    const [reiews, setReviews] = useState(null);
    const [poster, setPoster] = useState(null);

    // useEffect(() => {
    //     axios.get(`http://localhost:8000/detailsmovie/${movieId}`).then((res) => {

    //         setDetails(res.data[0].details);

    //         setReviews(res.data[0].casts.slice(0, 5));

    //         setBackground(
    //             `https://image.tmdb.org/t/p/original/${res.data[0].backdrop}`
    //         );

    //         setPoster(
    //             `https://image.tmdb.org/t/p/w342/${res.data[0].poster}`
    //         );

    //         setTrailerId(res.data[0].trailer_id);
            
    //     });
    // }, [movieId]);

    window.scrollTo({
        top: 0,
    });

    useEffect(() => {
        (async () => {
            const response = (
                await api.get(
                    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=${language}`
                )
            ).data;
            setDetails(response);
            setBackground(
                `https://image.tmdb.org/t/p/original/${response.backdrop_path}`
            );
            setPoster(
                `https://image.tmdb.org/t/p/w342/${response.poster_path}`
            );
        })();
    }, [movieId]);

    useEffect(() => {
        (async () => {
            const response = (
                await api.get(
                    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=${language}`
                )
            ).data;
            setReviews(response.cast.slice(0, 5));
        })();
    }, [movieId]);

    useEffect(() => {
        (async () => {
            const response = (
                await api.get(
                    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=${language}`
                )
            ).data;
            setTrailerId(response.results[0].key);
        })();
    }, [movieId]);

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
