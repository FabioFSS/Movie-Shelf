import styles from "../styles/TVShowProgress.module.css"

function TVShowProgress(props){
    return (
        <div className={styles.progress_body}>
            <p className={styles.title}><a href={props.link}>{props.title}</a></p>
            <div className={styles.image_and_description}>
                <img className={styles.banner} src={props.banner}></img>
                <div className={styles.description_box}>
                    <p className={styles.description_label}>Episode description</p>
                    <p className={styles.description_text}>{props.description}</p>
                    <progress className={styles.progress_bar} max={100} value={props.value}></progress>
                </div>
            </div>
        </div>
    );    
}

export default TVShowProgress