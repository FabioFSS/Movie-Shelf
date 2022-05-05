import "../styles/TVShowProgress.css"

function TVShowProgress(props){
    return (
        <div className="tv_show_progress_body">
            <p className="tv_show_title"><a href={props.link}>{props.title}</a></p>
            <div className="tv_show_image_and_description">
                <img className="tv_show_banner" src={props.banner}></img>
                <div className="tv_show_description_box">
                    <p className="tv_show_description_label">Episode description</p>
                    <p className="tv_show_description_text">{props.description}</p>
                    <progress className="tv_show_progress_bar" max={100} value={props.value}></progress>
                </div>
            </div>
        </div>
    );    
}

export default TVShowProgress