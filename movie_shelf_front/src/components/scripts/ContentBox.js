import styles from "../styles/ContentBox.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ContentBox({ banner, title, link }) {
    return (
        <div className={styles.banner_body}>
            <Link className={styles.link} to={link}>
                <div className={styles.content_body}>
                    <img
                        className={styles.banner_image}
                        src={banner}
                        alt="banner"
                    ></img>
                    <p className={styles.banner_title}>{title}</p>
                </div>
            </Link>
        </div>
    );
}

ContentBox.propTypes = {
    banner: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

ContentBox.defaultProps = {
    title: "Missing title",
};

export default ContentBox;
