import React, { useState, useEffect } from "react";
import { api, apiKey, language } from "../../services/api";
import DetailTv from "../../components/scripts/DetailTv";
import styles from "./styles.module.css";

export default function Teste() {
    const [tvId] = useState(window.location.href.split("=")[1]);
    const [background, setBackground] = useState(null);
    const [details, setDetails] = useState(null);
    const [reiews, setReviews] = useState(null);
    const [poster, setPoster] = useState(null);

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
                    `https://api.themoviedb.org/3/tv/${tvId}/credits?api_key=${apiKey}&language=${language}`
                )
            ).data;
            setReviews(response.cast.slice(0, 5));
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
            setPoster(
                `https://image.tmdb.org/t/p/w342/${response.poster_path}`
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
            <DetailTv details={details} poster={poster} reiews={reiews} />
        </div>
    );
}
