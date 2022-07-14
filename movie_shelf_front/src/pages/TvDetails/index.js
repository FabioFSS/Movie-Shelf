// react
import React, { useState, useEffect } from "react";

// styles
import styles from "./styles.module.css";

import useAxios from "../../utils/useAxios";

// components
import DetailTv from "../../components/scripts/DetailTv";

export default function TvDetails() {
    // states
    const [tvId] = useState(window.location.href.split("=")[1]);
    const [background, setBackground] = useState(null);
    const [details, setDetails] = useState(null);
    const [reiews, setReviews] = useState(null);
    const [poster, setPoster] = useState(null);

    const api = useAxios();

    useEffect(() => {
        api.get(`/detailstv/${tvId}`).then((res) => {

            setDetails(res.data[0].details);

            setReviews(res.data[0].casts.slice(0, 5));

            setBackground(`https://image.tmdb.org/t/p/original/${res.data[0].backdrop}`);

            setPoster(`https://image.tmdb.org/t/p/w342/${res.data[0].poster}`);

        });
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
            <DetailTv details={details} poster={poster} reiews={reiews} tvId={tvId}/>
        </div>
    );
}
