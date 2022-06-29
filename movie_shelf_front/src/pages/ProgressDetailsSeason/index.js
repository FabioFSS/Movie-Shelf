// react
import React from "react";

// styles
import styles from "./styles.module.css";

// components
import ProfileHeader from "../../components/scripts/ProfileHeader";
import ProfileBackground from "../../components/scripts/ProfileBackground";
import ContentBanner from "../../components/scripts/ContentBanner";
import ContentSummary from "../../components/scripts/ContentSummary";

// assets
import episode1 from "../../assets/lists_banners/banner2.png";
import episode2 from "../../assets/lists_banners/banner3.png";
import episode3 from "../../assets/lists_banners/banner4.png";
import episode4 from "../../assets/lists_banners/banner5.png";
import description_banner from "../../assets/seasons_banners/banner.jpg";

function ProgressDetailsSeason() {
    window.scrollTo({
        top: 0,
    });

    return (
        <div className={styles.page_body}>
            <ProfileBackground></ProfileBackground>
            <div className={styles.progress_details_season_body}>
                <ProfileHeader></ProfileHeader>
                <h1 className={styles.season_label}>Season number</h1>
                <ContentBanner
                    banner={description_banner}
                    description="Description of the season"
                ></ContentBanner>
                <div className={styles.episodes_grid}>
                    <ContentSummary
                        title="Episode 1"
                        description="Description of the episode"
                        banner={episode1}
                        link="/progressdetailsseason"
                    ></ContentSummary>
                    <ContentSummary
                        title="Episode 2"
                        description="Description of the episode"
                        banner={episode2}
                        link="/progressdetailsseason"
                    ></ContentSummary>
                    <ContentSummary
                        title="Episode 3"
                        description="Description of the episode"
                        banner={episode3}
                        link="/progressdetailsseason"
                    ></ContentSummary>
                    <ContentSummary
                        title="Episode 4"
                        description="Description of the episode"
                        banner={episode4}
                        link="/progressdetailsseason"
                    ></ContentSummary>
                </div>
            </div>
        </div>
    );
}

export default ProgressDetailsSeason;
