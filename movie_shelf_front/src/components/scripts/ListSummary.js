import styles from "../styles/ListSummary.module.css"

function ListSummary(props){
    return (
        <div className={styles.summary_body}>
            <p className={styles.title}><a href={props.link}>{props.title}</a></p>
            <div className={styles.image_and_description}>
                <img className={styles.banner} src={props.banner}></img>
                <div className={styles.description_box}>
                    <p className={styles.description_label}>Description</p>
                    <p className={styles.description_text}>{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default ListSummary;