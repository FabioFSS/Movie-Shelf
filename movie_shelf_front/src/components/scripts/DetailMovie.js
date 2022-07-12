// react
import React from "react";
import { FaStar, FaComment } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import NavItem from "./NavItem";
import ListDropdown from "./ListDropdown";
import plus_icon from '../../assets/plus_icon.png'

// styles
import styles from "../styles/DetailMovie.module.css";

export default function DetailMovie({ details, poster, reiews }) {
    const navigate = useNavigate();

    return (
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
                            <button
                                className={styles.buttomComment}
                                onClick={() => {
                                    navigate(`/ratings:id=${details.id}#${poster}`);
                                }}
                            >
                                <FaComment className={styles.iconComment} />
                            </button>
                            <button className={styles.buttomAdd}>
                                <NavItem icon={plus_icon}>
                                    <ListDropdown
                                        content_id={details.id}
                                        content_type="movie"
                                    ></ListDropdown>
                                </NavItem>
                            </button>
                        </div>
                        <h1 className={styles.title}>{details.title}</h1>
                        <p className={styles.overview}>{details.overview}</p>
                        <div className={styles.casts}>
                            {reiews &&
                                reiews.map((actor, key) => (
                                    <div
                                        className={styles.containerInfoCasts}
                                        key={key}
                                    >
                                        <img
                                            className={styles.imgActors}
                                            src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                                        />
                                        <p className={styles.nameActor}>
                                            {actor.name}
                                        </p>
                                    </div>
                                ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}