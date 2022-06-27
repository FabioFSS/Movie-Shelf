import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import Slider from "../../components/scripts/Slider";
import ProfileHeader from "../../components/scripts/ProfileHeader";
import ProfileBackground from "../../components/scripts/ProfileBackground";
import ProfileStatistics from "../../components/scripts/ProfileStatistics";
import AuthContext from "../../contexts/AuthContext";

function Profile() {
    const { user, logoutUser, authTokens } = useContext(AuthContext);
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        if (user) {
            axios
                .get(`http://localhost:8000/user_profile/${user.id}`, {headers: { Authorization: `Bearer ${authTokens?.access}` }})
                .then((res) => {
                    console.log(res.data);
                    setUserData(res.data);
                });
        }
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
