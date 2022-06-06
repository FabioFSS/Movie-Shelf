import React from "react";
import styles from './styles.module.css';
import Slider from "../../components/scripts/Slider";
import ProfileHeader from "../../components/scripts/ProfileHeader";
import ProfileBackground from "../../components/scripts/ProfileBackground";
import ProfileStatistics from "../../components/scripts/ProfileStatistics";

function Profile() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    return (
        <div className={styles.page_body}>
            <ProfileBackground></ProfileBackground>
            <div className={styles.profile_body}>
                <ProfileHeader></ProfileHeader>
                <ProfileStatistics completed={15} reviews={8} average_ratings={4.4}></ProfileStatistics>
                <div className={styles.sliders}>
                    <Slider title="Calendar" page={2}></Slider>
                    <Slider title="Recently Watched" page={1}></Slider>
                </div>
            </div>
        </div>
    );
}

export default Profile;