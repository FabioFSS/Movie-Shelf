import React from "react";
import styles from './styles.module.css';
import Navbar from "../../components/scripts/Navbar";
import { BrowserRouter as Router } from 'react-router-dom';
import SliderWrap from "../../components/scripts/SliderWrap";
import ProfileHeader from "../../components/scripts/ProfileHeader";
import ProfileBackground from "../../components/scripts/ProfileBackground";
import ProfileStatistics from "../../components/scripts/ProfileStatistics";

function Profile() {
    return (
        <div className={styles.page_body}>
            <ProfileBackground></ProfileBackground>
            <div className={styles.profile_navbar}>
                <Router>
                    <Navbar></Navbar>   
                </Router>
            </div>
            <div className={styles.profile_body}>
                <ProfileHeader></ProfileHeader>
                <ProfileStatistics completed={15} reviews={8} average_ratings={4.4}></ProfileStatistics>
                <div className={styles.sliders}>
                    <SliderWrap title="Calendar" page={2}></SliderWrap>
                    <SliderWrap title="Recently Watched" page={1}></SliderWrap>
                </div>
            </div>
        </div>
    );
}

export default Profile;