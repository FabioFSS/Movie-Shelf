import React from "react";
import styles from './styles.module.css';
import Navbar from "../../components/scripts/Navbar";
import { BrowserRouter as Router } from 'react-router-dom';
import ProfileHeader from "../../components/scripts/ProfileHeader";
import ProfileBackground from "../../components/scripts/ProfileBackground";
import ContentBanner from "../../components/scripts/ContentBanner";
import description_banner from "../../assets/seasons_banners/banner.jpg"
import ContentSummary from "../../components/scripts/ContentSummary";
import episode1 from "../../assets/lists_banners/banner2.png"
import episode2 from "../../assets/lists_banners/banner3.png"
import episode3 from "../../assets/lists_banners/banner4.png"
import episode4 from "../../assets/lists_banners/banner5.png"

function ProgressDetailsSeason() {
    return (
        <div className={styles.page_body}>
            <ProfileBackground></ProfileBackground>
            <div className={styles.progress_details_season_navbar}>
                <Router>
                    <Navbar></Navbar>
                </Router>
            </div>  

            <div className={styles.progress_details_season_body}>
                <ProfileHeader></ProfileHeader>
                <h1 className={styles.season_label}>Season number</h1>
                <ContentBanner banner={description_banner} description="Description of the season"></ContentBanner>
                <div className={styles.episodes_grid}>
                    <ContentSummary title="Episode 1" description="Description of the episode" banner={episode1} link="/progressdetailsseason"></ContentSummary>
                    <ContentSummary title="Episode 2" description="Description of the episode" banner={episode2} link="/progressdetailsseason"></ContentSummary>
                    <ContentSummary title="Episode 3" description="Description of the episode" banner={episode3} link="/progressdetailsseason"></ContentSummary>
                    <ContentSummary title="Episode 4" description="Description of the episode" banner={episode4} link="/progressdetailsseason"></ContentSummary>
                </div>
            </div>
        </div>
    );
}

export default ProgressDetailsSeason;