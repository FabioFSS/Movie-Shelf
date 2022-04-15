import React, { useState } from 'react'
import './styles.scss'
import logo from "../../assets/logo.png";
import profile from "../../assets/profile.png";

export default function Scroll() {

    const [data] = useState({
        id: 634649,
        media_type: "movie",
        original_language: "en",
        original_title: "Spider-Man: No Way Home",
        overview: "Peter Parker é desmascarado e não consegue mais separar sua vida normal dos grandes riscos de ser um super-herói. Quando ele pede ajuda ao Doutor Estranho, os riscos se tornam ainda mais perigosos, e o forçam a descobrir o que realmente significa ser o Homem-Aranha.",
        popularity: 5792.421,
        poster_path: "/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg",
        release_date: "2021-12-15",
        title: "Homem-Aranha: Sem Volta Para Casa",
        video: false,
        vote_average: 8.2,
        vote_count: 11398,
        actors: [
            `https://image.tmdb.org/t/p/w500//2qhIDp44cAqP2clOgt2afQI07X8.jpg`,
            `https://image.tmdb.org/t/p/w500//xWOU0S7AqGEkyk8scLwwz66R2GO.jpg`,
            `https://image.tmdb.org/t/p/w500//fBEucxECxGLKVHBznO0qHtCGiMO.jpg`,
            `https://image.tmdb.org/t/p/w500//3sJJHI672zXZDQyQ6HycToHAfCR.jpg`,
            `https://image.tmdb.org/t/p/w500//8MtRRnEHaBSw8Ztdl8saXiw1egP.jpg`
        ],
        uriBackground: `https://image.tmdb.org/t/p/original//iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg`
    });

    const uri = `https://image.tmdb.org/t/p/w342/${data.poster_path}`;

    return (
        <div className='wrapper'>
            <div className='backgrundImg' style={{ backgroundImage: `url(${data.uriBackground})` }} />
            <div className='navbar'>
                <div style={{ display: "flex", width: "600px" }}>
                    <h1 className='menu'>Tv</h1>
                    <h1 className='menu'>Series</h1>
                    <h1 className='menu'>Movies</h1>
                </div>
                <img className='logo' src={logo} />
                <div style={{ display: "flex", alignItems: "center", width: "600px" }}>
                    <input type="text" name="search" className='serch' placeholder='Search' />
                    <img className='profile' src={profile} onclick="" />
                </div>
            </div>
            <div className='teste1'>
                <div className='containerPoster'>
                    <img className='poster' src={uri} />
                    <p className='vote'>{data.vote_average}</p>
                </div>
                <div className='detailsContainer'>
                    <h1 className='title'>{data.title}</h1>
                    <p className='overview'>{data.overview}</p>
                    <div className='casts'>
                        {data.actors.map((actor) =>
                            <div className='teste'>
                                <img className='imgActors' src={actor} />
                                <p className='nameActor'>Name Actor</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}