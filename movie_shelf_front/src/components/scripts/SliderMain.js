import React from 'react';
import '../styles/SliderMain.css';
import img1 from "../image-item/morbius.png"

function SliderMain(props) {

    return (
        <div className='container'>

            <h1 className="title-slider">{props.title}</h1>
            <div>
                <a href="">
                    <div className="itemImg">
                        <img className="lazyloaded" id="slidermain" src={img1} alt="Assistir Spy x Family" />
                    </div>
                </a>

            </div>
        </div>
    );
}

export default SliderMain;