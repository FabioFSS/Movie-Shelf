import React from "react";
import styles from "./styles.module.css";
import HomeHeader from "../../components/scripts/HomeHeader"
import Slider from "../../components/scripts/Slider"

function Home(){
    return (
        <div className={styles.page_body}>
            <HomeHeader></HomeHeader>
            <Slider title="Upcoming" page={1}></Slider>
            <Slider title="Releases" page={2}></Slider>
        </div>
    );
}

export default Home;