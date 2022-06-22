import React from 'react'
import { FaStar } from "react-icons/fa";
import styles from '../styles/DetailTv.module.css'

export default function DetailMovie({ details, poster, reiews }) {
    return (
        <div className={styles.containerMovie}>
            {details && <>
                <div className={styles.containerPoster}>
                    <img className={styles.poster} src={poster} />                            
                    <div className={styles.containerVote}>
                        <FaStar size={40} color={styles.yellow}/>
                        <p className={styles.vote}>{details.vote_average}</p>
                    </div>
                </div>
                <div className={styles.detailsContainer}>
                    <h1 className={styles.title}>{details.name}</h1>
                    <p className={styles.overview}>{details.overview}</p>
                    <div className={styles.casts}>
                        {reiews && reiews.map((actor, key) =>
                            <div className={styles.containerInfoCasts} key={key}>
                                <img 
                                    className={styles.imgActors} 
                                    src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} 
                                />
                                <p className={styles.nameActor}>{actor.name}</p>
                            </div>
                        )}
                    </div>
                    <div>
                        <h3 class={styles.textSeason}>Seasons</h3>
                        <select class={styles.selectSeason}>
                            <option value="Select">Season 1</option>
                            <option value="Select">Season 2</option>
                            <option value="Select">Season 3</option>
                            <option value="Select">Season 4</option>
                            <option value="Select">Season 5</option>
                            <option value="Select">Season 6</option>
                            <option value="Select">Season 7</option>
                            <option value="Select">Season 8</option>
                        </select>
                    </div>
                </div>    
            </>}            
        </div>
    )
}