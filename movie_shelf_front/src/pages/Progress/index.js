// react
import React, { useContext, useState, useEffect } from "react";

// styles
import styles from "./styles.module.css";

// components
import ProfileHeader from "../../components/scripts/ProfileHeader";
import ProfileBackground from "../../components/scripts/ProfileBackground";
import TVShowProgerss from "../../components/scripts/TVShowProgress";

// contexts
import AuthContext from "../../contexts/AuthContext";

// hooks
import useAxios from "../../utils/useAxios";

function Progress() {
    // contexts
    const { user } = useContext(AuthContext);

    // hooks
    const api = useAxios();

    // states
    const [progresses, setProgresses] = useState([]);

    // recovers from the backend the logged user's data
    useEffect(() => {
        const fetchData = async () => {
            if (user) {
                try {
                    const response = await api.get(
                        `/progress/${user.username}`
                    );
                    setProgresses(response.data);
                } catch {
                    setProgresses("Something went wrong");
                }
            }
        };
        fetchData();
    }, [user]);

    let tvShows = [];

    for (let i = 0; i < progresses.length; i++) {
        tvShows.push(
            <TVShowProgerss
                link={`/tvdetails:id=${progresses[i].content_id}`}
                title={progresses[i].name}
                description={progresses[i].overview}
                banner={progresses[i].poster}
                value={progresses[i].count}
                max={progresses[i].max_count}
                id={progresses[i].id}
                content_id={progresses[i].content_id}
            />
        );
    }

    window.scrollTo({
        top: 0,
    });

    return (
        <div className={styles.page_body}>
            <ProfileBackground></ProfileBackground>
            <div className={styles.progress_body}>
                <ProfileHeader></ProfileHeader>
                <h1 className={styles.progress_label}>Progress</h1>
                {tvShows.length ? (
                    <div className={styles.tv_shows}>{tvShows}</div>
                    
                    ) : (
                        
                        <div className={styles.no_tv_shows}><p>You are watching no TV shows</p></div>
                )}
            </div>
        </div>
    );
}

export default Progress;
