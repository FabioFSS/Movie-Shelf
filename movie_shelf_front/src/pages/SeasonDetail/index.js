// react
import React, { useState, useEffect } from "react";

// services
import { apiKey, language } from "../../services/api";

// styles
import styles from "./styles.module.css";

// components
import DetailTv from "../../components/scripts/SeasonDetail";

import useAxios from "../../utils/useAxios";

import { useParams } from "react-router-dom";

export default function SeasonDetail() {
    // states
    const { tvId, season_number } = useParams();
    const [overview, setOverview] = useState(null);
    const [background, setBackground] = useState(null);
    const [details, setDetails] = useState(null);
    const [poster, setPoster] = useState(null);
    const [seasonNumber, setSeasonNumber] = useState(null);
    const [episodes, setEpisodes] = useState(null);

    const api = useAxios();

    window.scrollTo({
        top: 0,
    });

    useEffect(() => {
        api.get(`/detailseason/${tvId}/${season_number}`).then((res) => {
            setPoster(`https://image.tmdb.org/t/p/w342${res.data[0].poster_path}`);
            setOverview(res.data[0].overview);
            setSeasonNumber(res.data[0].season_number);
            setEpisodes(res.data[0].episodes);
        });
    }, [tvId, season_number]);


    useEffect(() => {
        (async () => {
            const response = (
                await api.get(
                    `https://api.themoviedb.org/3/tv/${tvId}?api_key=${apiKey}&language=${language}`
                )
            ).data;
            setDetails(response);
            setBackground(
                `https://image.tmdb.org/t/p/original/${response.backdrop_path}`
            );
        })();
    }, [tvId]);

    return (
        <div className={styles.wrapper_details}>
            <div
                className={styles.backgrund_img}
                style={{ backgroundImage: `url(${background})` }}
            />
            <DetailTv 
                details={details} 
                poster={poster} 
                overview={overview}
                tvId={tvId}
                seasonNumber={seasonNumber}
                episodes={episodes}
            />
        </div>
    );
}
