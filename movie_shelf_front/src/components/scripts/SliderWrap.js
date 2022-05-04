import React from "react";

import "../styles/SliderWrap.css";
import img1 from "../image-item/spyxfamily.jpg"
import img2 from "../image-item/cue.jpg"
import img3 from "../image-item/sabikui disco.jpg"
import img4 from "../image-item/berserk.jpg"
import img5 from "../image-item/kamikazui no nigiatari.jpg"
function SliderWrap(props) {
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
                <div className="item">
                    <a href="">
                        <div className="itemImg">
                            <img className="lazyloaded" src={img1} alt="Assistir Spy x Family" />
                        </div>
                        <div className="itemInfo">

                        </div>
                    </a>
                </div>
                <div className="item">
                    <a href="">
                        <div className="itemImg">
                            <img className="lazyloaded" src={img2} alt="Assistir Cue!" />
                        </div>
                        <div className="itemInfo">

                        </div>
                    </a>
                </div>
                <div className="item">
                    <a href="">
                        <div className="itemImg">
                            <img className="lazyloaded" src={img3} alt="Assistir Sabikui Disco" />
                        </div>
                        <div className="itemInfo">

                        </div>
                    </a>
                </div>
                <div className="item">
                    <a href="">
                        <div className="itemImg">
                            <img className="lazyloaded" src={img4} alt="Assistir Berserker" />
                        </div>
                        <div className="itemInfo">

                        </div>
                    </a>
                </div>
                <div className="item">
                    <a href="">
                        <div className="itemImg">
                            <img className="lazyloaded" src={img5} alt="Assistir Kamikazui no Nigiatari" />
                        </div>
                        <div className="itemInfo">

                        </div>
                    </a>
                </div>
            </div>

        </div>

    );
}

export default SliderWrap;