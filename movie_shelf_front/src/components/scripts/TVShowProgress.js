// react
import { useContext, useState } from "react";
import PropTypes from "prop-types";

// styles
import styles from "../styles/TVShowProgress.module.css";

// utils
import useAxios from "../../utils/useAxios";

// contexts
import AuthContext from "../../contexts/AuthContext";

function TVShowProgress({ link, title, description, banner, value, max, id, content_id }) {
    const {user} = useContext(AuthContext);
    const api = useAxios();

    const [currentValue, setCurrentValue] = useState(value);

    const add_progress = () => {
        api.post(`/addprogress/${user.username}/${id}/${content_id}`)
        setCurrentValue(currentValue + 1)
    };

    return (
        <div className={styles.progress_body}>
            <p className={styles.title}>
                <a href={link}>{title}</a>
            </p>
            <div className={styles.image_and_description}>
                <img className={styles.banner} src={banner}></img>
                <div className={styles.description_box}>
                    <p className={styles.description_text}>{description}</p>
                    <div className={styles.progress}>
                        <progress
                            className={styles.progress_bar}
                            max={max}
                            value={currentValue}
                        ></progress>
                        <button
                            className={styles.add_button}
                            onClick={() => add_progress(id)}
                        >
                            +
                        </button>
                    </div>
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
