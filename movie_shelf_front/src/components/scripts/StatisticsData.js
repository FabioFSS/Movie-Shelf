import styles from "../styles/StatisticsData.module.css"
import PropTypes from "prop-types"

function StatisticsData({title, value, style}){
    return (
        <div className={styles.data_body}>
            <p className={styles.data_title}>{title}</p>
            <div className={styles.data_circle} style={style}>
                <p className={styles.data_value}>{value}</p>
            </div>
        </div>
    );
}

StatisticsData.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    style: PropTypes.object
}

StatisticsData.defaultProps = {
    title: "Missing title",
    value: 0
}


export default StatisticsData