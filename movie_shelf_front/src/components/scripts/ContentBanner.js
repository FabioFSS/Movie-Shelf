// react
import PropTypes from "prop-types";

// styles
import styles from "../styles/ContentBanner.module.css";

function ContentBanner({ banner, description }) {
    return (
        <div className={styles.banner_body}>
            <div className={styles.content_body}>
                <img
                    className={styles.banner_image}
                    src={banner}
                    alt="banner"
                ></img>
                <p className={styles.banner_description}>{description}</p>
            </div>
        </div>
    );
}

ContentBanner.propTypes = {
    banner: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

ContentBanner.defaultProps = {
    description: "Missing description",
};

export default ContentBanner;
