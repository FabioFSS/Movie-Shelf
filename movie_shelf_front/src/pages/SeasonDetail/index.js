// react
import React, { useState, useEffect } from "react";

// services
import { api, apiKey, language } from "../../services/api";

// styles
import styles from "./styles.module.css";

// components
import DetailTv from "../../components/scripts/SeasonDetail";

import useAxios from "../../utils/useAxios";

export default function SeasonDetail() {
    // states
    const [tvId] = useState(window.location.href.split("=")[1].split("#")[0]);
    const [season_number] = useState(window.location.href.split("=")[1].split("#")[1]);
    const [overview, setOverview] = useState(null);
    const [background, setBackground] = useState(null);
    const [details, setDetails] = useState(null);
    const [poster, setPoster] = useState(null);
    const [seasonNumber, setSeasonNumber] = useState(null);
    const [numberEpisodes, setNumberEpisodes] = useState(null);
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
            setNumberEpisodes(res.data[0].episodes.length);
            setEpisodes(res.data[0].episodes);
        });
    }, [tvId]);


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
    }, []);

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
