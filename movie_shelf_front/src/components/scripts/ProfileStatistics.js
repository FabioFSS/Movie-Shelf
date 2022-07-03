// react
import { useContext } from "react";
import PropTypes from "prop-types";

// styles
import styles from "../styles/ProfileStatistics.module.css";

// components
import StatisticsData from "./StatisticsData";

// contexts
import AuthContext from "../../contexts/AuthContext";

function ProfileStatistics() {
    // contexts
    const { userData } = useContext(AuthContext);

    window.scrollTo({
        top: 0,
    });
    return (
        <div className={styles.stats_body}>
            <div className={styles.stats_box}>
                {userData.map((userData) => (
                    <>
                        <p className={styles.stats_label}>Statistics</p>
                        <div className={styles.stats_data}>
                            <StatisticsData
                                title="Movies/TV Shows completed"
                                value={userData.content_completed}
                                style={{ "background-color": "#0D5462" }}
                            ></StatisticsData>
                            <StatisticsData
                                title="Reviews"
                                value={userData.review_number}
                                style={{ "background-color": "#0D6122" }}
                            ></StatisticsData>
                            <StatisticsData
                                title="Average Rating"
                                value={userData.average_rating}
                                style={{ "background-color": "#61440D" }}
                            ></StatisticsData>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
}

ProfileStatistics.propTypes = {
    completed: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
    average_ratings: PropTypes.number.isRequired,
};

ProfileStatistics.defaultProps = {
    completed: 0,
    reviews: 0,
    average_ratings: 0,
};

export default ProfileStatistics;
