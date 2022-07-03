// react
import React from "react";

// styles
import styles from "./styles.module.css";

// components
import Slider from "../../components/scripts/Slider";
import ProfileHeader from "../../components/scripts/ProfileHeader";
import ProfileBackground from "../../components/scripts/ProfileBackground";
import ProfileStatistics from "../../components/scripts/ProfileStatistics";

function Profile() {
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
                    <Slider title="Calendar" page={2} typeList='tv'></Slider>
                    <Slider title="Recently Watched" page={1} typeList='movies'></Slider>
                </div>
            </div>
        </div>
    );
}

export default Profile;
