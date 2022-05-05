import React from "react";
import Navbar from "../../components/scripts/Navbar";
import { Menu } from "../../components/Menu";
import './profile.scss';
import profile_pic from "../../assets/profile.png";
import { BrowserRouter as Router } from 'react-router-dom';
import SliderWrap from "../../components/scripts/SliderWrap";

function Profile() {
    return (
        <div>
            <div className="page_body">
                <div className="navbar_profile">
                    <Router>
                        <Navbar></Navbar>
                    </Router>
                </div>
                <div className='background_img'/>
                <div className='teste'>
                    <div className="profile_body">
                        <div className="profile_data">
                            <img className="profile_data_pic" src={profile_pic} alt="profile data pic"></img>
                            <p className="profile_name">Nome</p>
                            <p className="profile_info">Info: cidade, idade, genero</p>
                        </div>
                        <div className="profile_menu">
                            <ul className="profile_menu_options">
                                <li>My lists</li>
                                <li>Progress</li>
                                <li>Ratings</li>
                                <li>Friends</li>
                                <li>Settings</li>
                            </ul>
                        </div>
                    </div>

                    <div className="activities">
                        <SliderWrap title="Recently Watched"></SliderWrap>
                        <SliderWrap title="Calendar"></SliderWrap>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Profile;