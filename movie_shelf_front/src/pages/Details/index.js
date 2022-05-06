import React, { useState, useEffect } from 'react'
import './styles.scss'
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../../components/scripts/Navbar';
import { Trailer } from '../../components/Trailer';
import { api, apiKey, language, page, section } from "../../services/api";
import { FaStar } from "react-icons/fa";

export default function Details({ id }) {
    
    const [movieId, setMovieId] = useState(window.location.href.split('=')[1]);
    const [details, setDetails] = useState(null);
    const [reiews, setReviews] = useState(null);
    const [trailerId, setTrailerId] = useState(null);

    const [background, setBackground] = useState(null);
    const [poster, setPoster] = useState(null);
 
    // useEffect(() => {
    //     (async () => {
    //         const response = (
    //             await api.get(`trending/movie/week?api_key=${apiKey}&language=${language}&page=${page}`              )
    //         ).data;
    //         setMovieId(response.results[section].id) 
    //     })()     
    // }, [id]);

    // useEffect(() => {
    //     (async () => {
    //         id = await window.location.href.split('=')[1];
    //         setMovieId(id) 
    //     })()     
    // }, []);

    useEffect(() => {
        (async () => {
            const response = (
                await api.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=${language}`)
            ).data;
            setDetails(response) 
            setBackground(`https://image.tmdb.org/t/p/original/${response.backdrop_path}`);
            setPoster(`https://image.tmdb.org/t/p/w342/${response.poster_path}`);
        })()             
    }, [movieId]);

    useEffect(() => {
        (async () => {
            const response = (
                await api.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=${language}`)
            ).data;
            setReviews(response.cast.slice(0, 5))
        })()      
    }, [movieId]);

    useEffect(() => {
        (async () => {
            const response = (
                await api.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=${language}`)
            ).data;
            setTrailerId(response.results[0].key) 
        })()   
             
    }, [movieId]);
    
    return ( 
        <div>
            <Router>
                <Navbar />
            </Router>
            <div className='wrapper'>
                <div className='backgrundImg' style={{ backgroundImage: `url(${background})` }} />
                
                <div className='container-movie'>
                    {details && <>
                        <div className='containerPoster'>
                            <img className='poster' src={poster} />                            
                            <div className='container-vote'>
                                <FaStar size={40} color="yellow"/>
                                <p className='vote'>{details.vote_average}</p>
                            </div>
                        </div>
                        <div className='detailsContainer'>
                            <h1 className='title'>{details.title}</h1>
                            <p className='overview'>{details.overview}</p>
                            <div className='casts'>
                                {reiews && reiews.map((actor, key) =>
                                    <div className='containerInfoCasts' key={key}>
                                        <img className='imgActors' src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} />
                                        <p className='nameActor'>{actor.name}</p>
                                    </div>
                                )}
                            </div>
                        </div>    
                    </>}
                </div>
                <div className='container-trailer'>
                    <div className='box-trailer'>
                        <h2 className='text-trailer'>Trailer</h2>
                        <Trailer trailerId={trailerId} />
                    </div>
                </div>
            </div>
            
        </div>
    );
}