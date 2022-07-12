import React, { useEffect, useState } from "react";
import { FaStar, FaPlus, FaComment } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import ListDropdown from "./ListDropdown";
import NavItem from "./NavItem";
import plus_icon from "../../assets/plus_icon.png";

import styles from "../styles/DetailTv.module.css";

export default function DetailMovie({ details, poster, reiews, tvId }) {
    const navigate = useNavigate();
    const [detailSeasons, setDetailSeasons] = useState(undefined);

    useEffect(() => {
        axios.get(`http://localhost:8000/seasons/${tvId}`).then((res) => {
            setDetailSeasons(res.data[0]);
        });
    }, [tvId]);

    function route(season_number) {
        return `/seasondetail:id=${tvId}#${season_number}`;
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
                                            content_id={tvId}
                                            content_type="tv_show"
                                        ></ListDropdown>
                                    </NavItem>
                                </button>
                            </div>
                            <h1 className={styles.title}>{details.name}</h1>
                            <p className={styles.overview}>
                                {details.overview}
                            </p>
                            <div className={styles.casts}>
                                {reiews &&
                                    reiews.map((actor, key) => (
                                        <div
                                            className={
                                                styles.containerInfoCasts
                                            }
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
            <h1>Seasons</h1>
            <div className={styles.seasonsWarapper}>
                {detailSeasons &&
                    detailSeasons.map((season, key) => (
                        <div className={styles.containerSeasons} key={key}>
                            <Link to={route(season.number_season)}>
                                <img
                                    className={styles.seasons}
                                    src={`${season.poster_path}`}
                                />
                            </Link>
                            <p className={styles.seasonNumber}>
                                Season {season.number_season}
                            </p>
                        </div>
                    ))}
            </div>
        </div>
    );
}
