// react
import React from "react";

// styles
import styles from "../styles/HomeHeader.module.css";

function HomeHeader() {
    return (
        <div className={styles.page_body}>
            <div className={styles.background_img}></div>
            <div className={styles.welcome_box}>
                <h1>Welcome to Movie Shelf</h1>
                <p>
                    Here you can explore TV shows and movies, follow your
                    favorite content, make lists and more!
                </p>
                <input
                    className={styles.search_box}
                    placeholder="Search for a tv show or movie"
                ></input>
            </div>
        </div>
    );
}

export default HomeHeader;
