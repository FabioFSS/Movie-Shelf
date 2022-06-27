// react
import PropTypes from "prop-types";

// styles
import styles from "../styles/ContentSummary.module.css";

function ContentSummary({ link, title, banner, description }) {
    return (
        <div className={styles.summary_body}>
            <p className={styles.title}>
                <a href={link}>{title}</a>
            </p>
            <div className={styles.image_and_description}>
                <img className={styles.banner} src={banner} alt="banner"></img>
                <div className={styles.description_box}>
                    <p className={styles.description_label}>Description</p>
                    <p className={styles.description_text}>{description}</p>
                </div>
            </div>
        </div>
    );
}

ContentSummary.propTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    banner: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

ContentSummary.defaultProps = {
    title: "Missing title",
    description: "Missing description",
};

export default ContentSummary;
