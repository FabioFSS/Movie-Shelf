// react
import React from "react";

// styles
import styles from "./styles.module.css";

// components
import HomeHeader from "../../components/scripts/HomeHeader";
import Slider from "../../components/scripts/Slider";

function Home() {
    window.scrollTo({
        top: 0,
    });

    return (
        <div className={styles.page_body}>
            <HomeHeader></HomeHeader>
            <Slider title="Upcoming" page={1} typeList="movies"></Slider>
            <Slider title="Releases" page={2} typeList="movies"></Slider>
        </div>
    );
}

export default Home;
