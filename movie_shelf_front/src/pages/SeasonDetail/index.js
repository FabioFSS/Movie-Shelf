// react
import React, { useState, useEffect } from "react";

// services
import { api, apiKey, language } from "../../services/api";

// styles
import styles from "./styles.module.css";

// components
import DetailTv from "../../components/scripts/SeasonDetail";

import axios from "axios";

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

    useEffect(() => {
        axios.get(`http://localhost:8000/detailseason/${tvId}/${season_number}`).then((res) => {
            setPoster(`https://image.tmdb.org/t/p/w342${res.data[0].poster_path}`);
            setOverview(res.data[0].overview);
            setSeasonNumber(res.data[0].season_number);
            setNumberEpisodes(res.data[0].episodes.length);
            setEpisodes(res.data[0].episodes);
        });
    }, [tvId]);

    window.scrollTo({
        top: 0,
    });

    useEffect(() => {
        (async () => {
            const response = await api.get(
                `trending/tv/week?api_key=68e356ae11aabb4bf082a0a61801672e&language=en-US&page=1`
            );
            const data = response.data.results.slice(0, 6);
            //   console.log(data)
        })();
    }, []);

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
            
            // console.log(response.last_episode_to_air.season_number)
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
