import styles from "../styles/ListSummary.module.css"
import PropTypes from "prop-types"

function ListSummary({link, title, banner, description}){
    return (
        <div className={styles.summary_body}>
            <p className={styles.title}><a href={link}>{title}</a></p>
            <div className={styles.image_and_description}>
                <img className={styles.banner} src={banner}></img>
                <div className={styles.description_box}>
                    <p className={styles.description_label}>Description</p>
                    <p className={styles.description_text}>{description}</p>
                </div>
            </div>
        </div>
    );
}

ListSummary.propTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    banner: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

ListSummary.defaultProps = {
    title: "Missing title",
    description: "Missing description"
}

export default ListSummary;