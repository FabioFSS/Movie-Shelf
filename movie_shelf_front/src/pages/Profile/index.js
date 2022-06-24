import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import Slider from "../../components/scripts/Slider";
import ProfileHeader from "../../components/scripts/ProfileHeader";
import ProfileBackground from "../../components/scripts/ProfileBackground";
import ProfileStatistics from "../../components/scripts/ProfileStatistics";

function Profile() {
    let user_id = 2;
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/user/${user_id}`).then((res) => {
            setUser(res.data);
        });
    }, [user_id]);

    window.scrollTo({
        top: 0,
    });

    return (
        <>
            {user.map((user) => (
                <div className={styles.page_body}>
                    <ProfileBackground></ProfileBackground>
                    <div className={styles.profile_body}>
                        <ProfileHeader
                            username={user.username}
                            location={user.location}
                            language={user.language}
                            email={user.email}
                            birth_date={user.birth_date}
                            bio={user.bio}
                            profile_pic={user.profile_pic}
                        ></ProfileHeader>
                        <ProfileStatistics
                            completed={user.content_completed}
                            reviews={user.review_number}
                            average_ratings={user.average_rating}
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
