// react
import React from "react";

// styles
import styles from "./styles.module.css";

// components
import ProfileHeader from "../../components/scripts/ProfileHeader";
import ProfileBackground from "../../components/scripts/ProfileBackground";
import TVShowProgerss from "../../components/scripts/TVShowProgress";

// assets
import banner1 from "../../assets/image-item/berserk.jpg";
import banner2 from "../../assets/image-item/cue.jpg";
import banner3 from "../../assets/image-item/sabikui disco.jpg";

function Progress() {
    window.scrollTo({
        top: 0,
    });

    return (
        <div className={styles.page_body}>
            <ProfileBackground></ProfileBackground>
            <div className={styles.progress_body}>
                <ProfileHeader></ProfileHeader>
                <h1 className={styles.progress_label}>Progress</h1>
                <div className={styles.tv_shows}>
                    <TVShowProgerss
                        title="TV Show 1"
                        description="Description of the next episode"
                        banner={banner1}
                        link="/progressdetailsoverview"
                        value={70}
                    ></TVShowProgerss>
                    <TVShowProgerss
                        title="TV Show 2"
                        description="Description of the next episode"
                        banner={banner2}
                        link="/progressdetailsoverview"
                        value={20}
                    ></TVShowProgerss>
                    <TVShowProgerss
                        title="TV Show 3"
                        description="Description of the next episode"
                        banner={banner3}
                        link="/progressdetailsoverview"
                        value={35}
                    ></TVShowProgerss>
                </div>
            </div>
        </div>
    );
}

export default Progress;
