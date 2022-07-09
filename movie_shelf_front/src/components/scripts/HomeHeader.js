// react
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// styles
import styles from "../styles/HomeHeader.module.css";

function HomeHeader() {
    // states
    const [search, setSearch] = useState(undefined);

    // hooks
    const navigate = useNavigate();

    function handleSearch(e) {
        if (e.key === 'Enter'){
            navigate(`/search:keyword=${search}`);
            window.location.reload();
        }
    }

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
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleSearch}
                ></input>
            </div>
        </div>
    );
}

export default HomeHeader;
