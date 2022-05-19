import React from "react";
import styles from './styles.module.css';
import Navbar from "../../components/scripts/Navbar";
import { BrowserRouter as Router } from 'react-router-dom';
import ProfileHeader from "../../components/scripts/ProfileHeader";
import ProfileBackground from "../../components/scripts/ProfileBackground";
import ContentBanner from "../../components/scripts/ContentBanner";
import description_banner from "../../assets/seasons_banners/banner.jpg"
import ContentBox from "../../components/scripts/ContentBox";
import season1 from "../../assets/seasons_banners/season1.jpg"
import season2 from "../../assets/seasons_banners/season2.jpg"
import season3 from "../../assets/seasons_banners/season3.jpg"
import season4 from "../../assets/seasons_banners/season4.jpg"
import season5 from "../../assets/seasons_banners/season5.jpg"
import season6 from "../../assets/seasons_banners/season6.jpg"
import season7 from "../../assets/seasons_banners/season7.jpg"

function ProgressDetailsOverview() {
    return (
        <div className={styles.page_body}>
            <ProfileBackground></ProfileBackground>
            <div className={styles.progress_details_over_navbar}>
                <Router>
                    <Navbar></Navbar>
                </Router>
            </div>  

            <div className={styles.progress_details_over_body}>
                <ProfileHeader></ProfileHeader>
                <h1 className={styles.tv_show_label}>TV Show name</h1>
                <ContentBanner banner={description_banner} description="Description of your TV Show"></ContentBanner>
                <div className={styles.seasons_grid}>
                    <ContentBox banner={season1} title="Season 1" link="/progressdetailsoverview"></ContentBox>
                    <ContentBox banner={season2} title="Season 2" link="/progressdetailsoverview"></ContentBox>
                    <ContentBox banner={season3} title="Season 3" link="/progressdetailsoverview"></ContentBox>
                    <ContentBox banner={season4} title="Season 4" link="/progressdetailsoverview"></ContentBox>
                    <ContentBox banner={season5} title="Season 5" link="/progressdetailsoverview"></ContentBox>
                    <ContentBox banner={season6} title="Season 6" link="/progressdetailsoverview"></ContentBox>
                    <ContentBox banner={season7} title="Season 7" link="/progressdetailsoverview"></ContentBox>
                </div>
            </div>
        </div>
    );
}

export default ProgressDetailsOverview;