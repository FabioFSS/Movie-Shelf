import React, { useEffect, useState } from "react";
import { FaStar, FaPlus, FaComment } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import styles from "../styles/EpisodeDetail.module.css";

import undImage from "../../assets/movie_undefined_folder.png"

export default function DetailEpisode({ details }) {

    const [detail, setDetail] = useState(undefined);

    useEffect(() => {
        setDetail(details)
    }, [details])
    
    function validImage(img) {       

        if (img.split("w342")[1] == "null") {
            return undImage;
        } else{
            return img;
        }
        
    }


    return (
        <div className={styles.wrapper}>
            <div className={styles.containerMovie}>
                {detail && (
                    <>
                        <div className={styles.containerPoster}>
                            <img className={styles.poster} src={validImage(`https://image.tmdb.org/t/p/w342${detail.still_path}`)} />
                            <div className={styles.containerVote}>
                                <FaStar size={40} color={styles.yellow} />
                                <p className={styles.vote}>
                                    {detail.vote_average}
                                </p>
                            </div>
                        </div>
                        
                        <div className={styles.detailsContainer}>
                            <h1 className={styles.title}>{detail.name} - Season {detail.season_number}</h1>
                            <p className={styles.overview}>{detail.overview}</p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
