// react
import React from "react";

// styles
import styles from "../styles/Slider.module.css";

function Slider({ title, boxes }) {
    return (
        <div className={styles.page_body}>
            <h1>{title}</h1>
            <div className={styles.content_box}>{boxes}</div>
        </div>
    );
}

export default Slider;
