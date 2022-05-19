import styles from "../styles/ContentBox.module.css"
import PropTypes from "prop-types"

function ContentBox({banner, title, link}){
    return (
        <div className={styles.banner_body}>
            <a className={styles.link} href={link}>
                <div className={styles.content_body}>
                    <img className={styles.banner_image} src={banner} alt="banner"></img>
                    <p className={styles.banner_title}>{title}</p>
                </div>
            </a>
        </div>
    );
}

ContentBox.propTypes = {
    banner: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}

ContentBox.defaultProps = {
    title: "Missing title"
}

export default ContentBox;