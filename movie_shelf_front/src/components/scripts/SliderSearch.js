// react
import React, { useEffect, useState } from "react";

// styles
import styles from "../styles/SliderSearch.module.css";

// components
import ContentBox from "./ContentBox";

import useAxios from "../../utils/useAxios";

function Slider({ title, page, typeList, keyword }) {
    const [movies, setMovies] = useState(null);
    const [search] = useState(keyword);

    const api = useAxios();

    useEffect(() => {
        if (typeList == "movies") {

            api.get(`/search/${search}`).then((res) => {
                setMovies(res.data[0][0].results);
            });        

        } else if (typeList == "tv") {

            api.get(`/search/${search}`).then((res) => {
                setMovies(res.data[0][1].results);
            });
        } else {
            return;
        }
    }, []);

    return (
        <div className={styles.page_body}>
            <h1>{title}</h1>
            <div className={styles.content_box}>
                {movies &&
                    movies.map((item, key) => (
                        <div key={key}>
                            {typeList == "movies" ? (
                                <a href={`/details:id=${item.id}`}>
                                    <ContentBox
                                        banner={`https://image.tmdb.org/t/p/w342/${item.poster_path}`}
                                        link={`/details:id=${item.id}`}
                                        title=""
                                    ></ContentBox>
                                </a>
                            ) : (
                                <a href={`/tvdetails:id=${item.id}`}>
                                    <ContentBox
                                        banner={`https://image.tmdb.org/t/p/w342/${item.poster_path}`}
                                        link={`/tvdetails:id=${item.id}`}
                                        title=""
                                    ></ContentBox>
                                </a>
                            )}
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Slider;
