// react
import PropTypes from "prop-types";

// styles
import styles from "../styles/TVShowProgress.module.css";

function TVShowProgress({ link, title, description, banner, value }) {
    return (
        <div className={styles.progress_body}>
            <p className={styles.title}>
                <a href={link}>{title}</a>
            </p>
            <div className={styles.image_and_description}>
                <img className={styles.banner} src={banner}></img>
                <div className={styles.description_box}>
                    <p className={styles.description_label}>
                        Episode description
                    </p>
                    <p className={styles.description_text}>{description}</p>
                    <progress
                        className={styles.progress_bar}
                        max={100}
                        value={value}
                    ></progress>
                </div>
            </div>
        </div>
    );
}

TVShowProgress.propTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    banner: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
};

TVShowProgress.defaultProps = {
    title: "Missing title",
    description: "Missing description",
    value: 0,
};

export default TVShowProgress;
