// react
import React, { useState, useEffect, useContext } from "react";

// other libs
import axios from "axios";

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

function Profile() {
    // contexts
    const { user } = useContext(AuthContext);

    // states
    const [userData, setUserData] = useState([]);

    // hooks
    const api = useAxios();

    // recovers from the backend the logged user's data
    useEffect(() => {
        const fetchData = async () => {
            if (user) {
                try {
                    const response = await api.get(
                        `/user_profile/${user.username}`
                    );
                    setUserData(response.data);
                } catch {
                    setUserData("Something went wrong");
                }
            }
        };
        fetchData();
    }, []);

    window.scrollTo({
        top: 0,
    });

    return (
        <>
            {userData.map((userData) => (
                <div className={styles.page_body}>
                    <ProfileBackground></ProfileBackground>
                    <div className={styles.profile_body}>
                        <ProfileHeader
                            username={userData.username}
                            location={userData.location}
                            language={userData.language}
                            email={userData.email}
                            birth_date={userData.birth_date}
                            bio={userData.bio}
                            profile_pic={userData.profile_pic}
                        ></ProfileHeader>
                        <ProfileStatistics
                            completed={userData.content_completed}
                            reviews={userData.review_number}
                            average_ratings={userData.average_rating}
                        ></ProfileStatistics>
                        <div className={styles.sliders}>
                            <Slider title="Calendar" page={2}></Slider>
                            <Slider title="Recently Watched" page={1}></Slider>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Profile;
