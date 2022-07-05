// react
import React, { useState, useEffect } from "react";

// services
import { api, apiKey, language } from "../../services/api";

// styles
import styles from "./styles.module.css";

// components
import DetailTv from "../../components/scripts/DetailTv";

export default function TvDetails() {
    // states
    const [tvId] = useState(window.location.href.split("=")[1]);
    const [background, setBackground] = useState(null);
    const [details, setDetails] = useState(null);
    const [reiews, setReviews] = useState(null);
    const [poster, setPoster] = useState(null);


    // useEffect(() => {
    //     axios.get(`http://localhost:8000/detailstv/${tvId}`).then((res) => {

    //         setDetails(res.data[0].details);

    //         setReviews(res.data[0].casts.slice(0, 5));

    //         setBackground(
    //             `https://image.tmdb.org/t/p/original/${res.data[0].backdrop}`
    //         );

    //         setPoster(
    //             `https://image.tmdb.org/t/p/w342/${res.data[0].poster}`
    //         );

    //     });
    // }, [tvId]);

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
            <DetailTv details={details} poster={poster} reiews={reiews} tvId={tvId}/>
        </div>
    );
}
