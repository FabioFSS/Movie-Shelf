import React from "react";
import { FaStar, FaPlus, FaComment } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import styles from "../styles/SeasonDetail.module.css";

import undImage from "../../assets/movie_undefined_folder.png"

export default function DetailMovie({ details, poster, overview, tvId, seasonNumber, episodes }) {
    
    const navigate = useNavigate();

    function route(episode_number) {
        return `/episodedetail:id=${tvId}#${seasonNumber}-${episode_number}`
    }

    function validImage(img) {
        

        if (img.split("w342")[1] == "null") {
            return undImage;
        } else{
            return img;
        }

        // return img;
        
    }
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.containerMovie}>
                {details && (
                    <>
                        <div className={styles.containerPoster}>
                            <img className={styles.poster} src={poster} />
                            <div className={styles.containerVote}>
                                <FaStar size={40} color={styles.yellow} />
                                <p className={styles.vote}>
                                    {details.vote_average}
                                </p>
                            </div>
                        </div>
                        
                        <div className={styles.detailsContainer}>
                            <div className={styles.comment}>
                                <button className={styles.buttomComment}
                                    onClick={() => {
                                        navigate(`/ratings:id=${details.id}`);
                                    }}
                                >   
                                    <FaComment className={styles.iconComment} />
                                </button>
                                <button className={styles.buttomAdd}
                                    onClick={() => {
                                        navigate("/lists");
                                    }}
                                >   
                                    <FaPlus className={styles.iconAdd} />
                                </button>
                            </div>
                            <h1 className={styles.title}>{details.name} - Season {seasonNumber}</h1>
                            <p className={styles.overview}>{overview}</p>
                        </div>
                    </>
                )}
            </div>
            <h1 className={styles.episodesText}>Episodes</h1>
            <div className={styles.seasonsWarapper}>
                {episodes &&
                    episodes.map((episode, key) => (
                        <div
                            className={styles.containerSeasons}
                            key={key}
                        >
                            <Link to={route(episode.episode_number)}>
                                <img
                                    className={styles.episodes}
                                    src={validImage(`https://image.tmdb.org/t/p/w342${episode.still_path}`)}
                                />
                            </Link>
                            <p className={styles.seasonNumber}>
                                Episode {episode.episode_number}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
