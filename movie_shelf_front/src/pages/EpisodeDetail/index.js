// react
import React, { useState, useEffect } from "react";

// services
import { api, apiKey, language } from "../../services/api";

// styles
import styles from "./styles.module.css";

// components
import DetailTv from "../../components/scripts/EpisodeDetail";

import useAxios from "../../utils/useAxios";

import { useParams } from "react-router-dom";

export default function EpisodeDetail() {

    // const [tvId] = useState(window.location.href.split("=")[1].split("#")[0]);
    // const [season_number] = useState(window.location.href.split("=")[1].split("#")[1].split("")[0]);
    // const [episode] = useState(window.location.href.split("=")[1].split("#")[1].split("-")[1]);

    const { tvId, season_number, episode } = useParams();

    const [detail, setDetail] = useState(null);
    const [background, setBackground] = useState(null);

    const api2 = useAxios();

    useEffect(() => {
        api2.get(`/detailepisode/${tvId}/${season_number}/${episode}`).then((res) => {
            setDetail(res.data[0])
        });
        
    }, [tvId, episode, season_number]);

    useEffect(() => {
        (async () => {
            const response = (
                await api.get(
                    `https://api.themoviedb.org/3/tv/${tvId}?api_key=${apiKey}&language=${language}`
                )
            ).data;
            setBackground(
                `https://image.tmdb.org/t/p/original/${response.backdrop_path}`
            );
        })();
    }, [tvId]);

    window.scrollTo({
        top: 0,
    });

    return (
        <div className={styles.wrapper_details}>
            <div
                className={styles.backgrund_img}
                style={{ backgroundImage: `url(${background})` }}
            />
            <DetailTv 
                details={detail} 
            />
        </div>
    );
}
