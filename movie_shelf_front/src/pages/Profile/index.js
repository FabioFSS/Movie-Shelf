// react
import React, {useContext, useState, useEffect} from "react";

// styles
import styles from "./styles.module.css";

// components
import Slider from "../../components/scripts/Slider";
import ProfileHeader from "../../components/scripts/ProfileHeader";
import ProfileBackground from "../../components/scripts/ProfileBackground";
import ProfileStatistics from "../../components/scripts/ProfileStatistics";

// contexts
import AuthContext from "../../contexts/AuthContext";

// hooks
import useAxios from "../../utils/useAxios";
import ContentBox from "../../components/scripts/ContentBox";

function Profile() {
    // contexts
    const { user } = useContext(AuthContext);

    // hooks
    const api = useAxios();

    // states
    const [recents, setRecents] = useState([]);

    // recovers from the backend the logged user's data
    useEffect(() => {
        const fetchData = async () => {
            if (user) {
                try {
                    const response = await api.get(
                        `/recentlywatched/${user.username}`
                    );
                    setRecents(response.data);
                } catch {
                    setRecents("Something went wrong");
                }
            }
        };
        fetchData();
    }, [user]);

    let boxes = [];

    for (let i = 0; i < recents.length; i++) {
        boxes.push(
            <ContentBox
                link={`/tvdetails:id=${recents[i].content_id}`}
                title={recents[i].name}
                banner={recents[i].poster}
            />
        );
    }

    window.scrollTo({
        top: 0,
    });

    return (
        <div className={styles.page_body}>
            <ProfileBackground></ProfileBackground>
            <div className={styles.profile_body}>
                <ProfileHeader></ProfileHeader>
                <ProfileStatistics></ProfileStatistics>
                <div className={styles.sliders}>
                    {boxes.length ? (
                        <Slider
                            title="Recently Watched"
                            boxes={boxes}
                        ></Slider>
                        
                        ):(
                            <Slider
                                title="Recently Watched"
                                boxes={'Nothing watched yet'}
                            ></Slider>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Profile;
