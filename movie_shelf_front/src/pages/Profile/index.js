import React from "react";
import './styles.css';
import Navbar from "../../components/scripts/Navbar";
import { BrowserRouter as Router } from 'react-router-dom';
import SliderWrap from "../../components/scripts/SliderWrap";
import ProfileHeader from "../../components/scripts/ProfileHeader";

function Profile() {
    return (
        <div className="page_body">
            <div className="background_img"/>
            <div className="profile_navbar">
                <Router>
                    <Navbar></Navbar>
                </Router>
            </div>
            <div className="profile_body">
                <ProfileHeader></ProfileHeader>
                <div className="sliders">
                    <SliderWrap title="Recently Watched"></SliderWrap>
                    <SliderWrap title="Calendar"></SliderWrap>
                </div>
            </div>
        </div>
    );
}

export default Profile;