import React from "react";
import styles from './styles.module.css';
import ProfileHeader from "../../components/scripts/ProfileHeader";
import ProfileBackground from "../../components/scripts/ProfileBackground";
import ContentSummary from "../../components/scripts/ContentSummary";
import ContentBanner from "../../components/scripts/ContentBanner";
import banner1 from "../../components/image-item/berserk.jpg"
import banner2 from "../../components/image-item/cue.jpg"
import banner3 from "../../components/image-item/kamikazui no nigiatari.jpg"
import banner4 from "../../components/image-item/sabikui disco.jpg"
import banner5 from "../../components/image-item/spyxfamily.jpg"
import description_banner from "../../assets/banner.png"

function ListDetails() {
    return (
        <div className={styles.page_body}>
            <ProfileBackground></ProfileBackground>
            <div className={styles.list_body}>
                <ProfileHeader></ProfileHeader>
                <h1 className={styles.list_name_label}>List name</h1>
                <ContentBanner banner={description_banner} description="Description of your list"></ContentBanner>
                <div className={styles.content_list}>
                    <ContentSummary title="Content 1" description="One of your contents" banner={banner1} link="/listdetails"></ContentSummary>
                    <ContentSummary title="Content 2" description="One of your contents" banner={banner2} link="/listdetails"></ContentSummary>
                    <ContentSummary title="Content 2" description="One of your contents" banner={banner3} link="/listdetails"></ContentSummary>
                    <ContentSummary title="Content 3" description="One of your contents" banner={banner4} link="/listdetails"></ContentSummary>
                    <ContentSummary title="Content 4" description="One of your contents" banner={banner5} link="/listdetails"></ContentSummary>
                </div>
            </div>
        </div>
    );
}

export default ListDetails;