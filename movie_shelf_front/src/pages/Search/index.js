// react
import React, { useState } from "react";

// styles
import styles from "./styles.module.css";

// components
import HomeHeader from "../../components/scripts/HomeHeader";
import SliderSearch from "../../components/scripts/SliderSearch";

function Search() {
    window.scrollTo({
        top: 0,
    });

    const [keyword] = useState(window.location.href.split("=")[1]);

    return (
        <div className={styles.page_body}>
            <HomeHeader></HomeHeader>
            <SliderSearch title="Results for movies" page={1} typeList="movies" keyword={keyword}></SliderSearch>
            <SliderSearch title="Results for tv shows" page={1} typeList="tv" keyword={keyword}></SliderSearch>
        </div>
    );
}

export default Search;
