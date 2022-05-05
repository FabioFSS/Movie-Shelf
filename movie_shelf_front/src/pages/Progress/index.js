import React from "react";
import "./styles.css";
import Navbar from "../../components/scripts/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import ProfileHeader from "../../components/scripts/ProfileHeader";
import TVShowProgerss from "../../components/scripts/TVShowProgress"
import banner1 from "../../components/image-item/berserk.jpg"
import banner2 from "../../components/image-item/cue.jpg"
import banner3 from "../../components/image-item/sabikui disco.jpg"

function Progress() {
    return (
        <div className="page_body">
            <div className="background_img"/>
            <div className="progress_navbar">
                <Router>
                    <Navbar></Navbar>
                </Router>
            </div>
            <div className="progress_body">
                <ProfileHeader></ProfileHeader>
                <h1 className="progress_label">Progress</h1>
                <div className="tv_shows">
                    <TVShowProgerss title="TV Show 1" description="Description of the next episode" banner={banner1} link="/progress" value={70}></TVShowProgerss>
                    <TVShowProgerss title="TV Show 2" description="Description of the next episode" banner={banner2} link="/progress" value={20}></TVShowProgerss>
                    <TVShowProgerss title="TV Show 3" description="Description of the next episode" banner={banner3} link="/progress" value={35}></TVShowProgerss>
                </div>
            </div>
        </div>
    );
}

export default Progress;