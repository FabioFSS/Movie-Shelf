import styles from "../styles/ProfileStatistics.module.css";
import StatisticsData from "./StatisticsData";
import PropTypes from "prop-types";

function ProfileStatistics({ completed, reviews, average_ratings }) {
    return (
        <div className={styles.stats_body}>
            <div className={styles.stats_box}>
                <p className={styles.stats_label}>Statistics</p>
                <div className={styles.stats_data}>
                    <StatisticsData
                        title="Movies/TV Shows completed"
                        value={completed}
                        style={{ "background-color": "#0D5462" }}
                    ></StatisticsData>
                    <StatisticsData
                        title="Reviews"
                        value={reviews}
                        style={{ "background-color": "#0D6122" }}
                    ></StatisticsData>
                    <StatisticsData
                        title="Average Rating"
                        value={average_ratings}
                        style={{ "background-color": "#61440D" }}
                    ></StatisticsData>
                </div>
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
