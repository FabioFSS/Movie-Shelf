import React, { useEffect, useState } from "react";
import "../styles/SliderWrap.css";
import img1 from "../image-item/spyxfamily.jpg"
import img2 from "../image-item/cue.jpg"
import img3 from "../image-item/sabikui disco.jpg"
import img4 from "../image-item/berserk.jpg"
import img5 from "../image-item/kamikazui no nigiatari.jpg"

import { api } from "../../services/api";

// const details = `/details:id=${829557}`; //Testes das rotas
// const details = `/details:id=${335787}`;

function SliderWrap(props) {

    // Modelo de response da api para teste de rotas
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await api.get(
                `trending/movie/week?api_key=68e356ae11aabb4bf082a0a61801672e&language=en-US&page=${props.page}`
            )
            const data = response.data.results.slice(0, 5);
            setMovies(data);
            
        })()     
    }, []);

    return (
        <div className="container">
            <div className="top-slider">
                <h1 className="title-slider">{props.title}</h1>
                <div className="next-prev-button">
                    <a href="" className="slider-button">
                        <i class="fa-solid fa-chevron-left" />
                    </a>
                    <a href="" className="slider-button">
                        <i class="fa-solid fa-chevron-right" />
                    </a>
                </div>

            </div>

            
            <div className="slider">
                
                {
                    movies && movies.map((item, key) => (
                        <div key={key} className="item">
                            <a href={`/details:id=${item.id}`}> {/* Fazendo teste nas rotas daas páginas*/}
                                <div className="itemImg">
                                    <img className="lazyloaded" 
                                        src={`https://image.tmdb.org/t/p/w342/${item.poster_path}`} 
                                        alt="Assistir Spy x Family" 
                                    />
                                </div>
                                <div className="itemInfo">

                                </div>
                            </a>
                        </div>
                    ))

                }

                {/* <div className="item">
                     <a href={details}>
                        <div className="itemImg">
                            <img className="lazyloaded" src={img1} alt="Assistir Spy x Family" />
                        </div>
                        <div className="itemInfo">

                        </div>
                    </a>
                </div>
                <div className="item">
                    <a href={details}>
                        <div className="itemImg">
                            <img className="lazyloaded" src={img2} alt="Assistir Cue!" />
                        </div>
                        <div className="itemInfo">

                        </div>
                    </a>
                </div>
                <div className="item">
                    <a href={details}>
                        <div className="itemImg">
                            <img className="lazyloaded" src={img3} alt="Assistir Sabikui Disco" />
                        </div>
                        <div className="itemInfo">

                        </div>
                    </a>
                </div>
                <div className="item">
                    <a href={details}>
                        <div className="itemImg">
                            <img className="lazyloaded" src={img4} alt="Assistir Berserker" />
                        </div>
                        <div className="itemInfo">

                        </div>
                    </a>
                </div>
                <div className="item">
                    <a href={details}>
                        <div className="itemImg">
                            <img className="lazyloaded" src={img5} alt="Assistir Kamikazui no Nigiatari" />
                        </div>
                        <div className="itemInfo">

                        </div>
                    </a>
                </div> */}
            </div>

        </div>

    );
}

export default SliderWrap;