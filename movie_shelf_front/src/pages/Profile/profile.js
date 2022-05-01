import React from "react";
import {Menu} from "../../components/Menu/index";
import './profile.scss';
import profile_pic from "../../assets/profile.png";
import img1 from "./images/img1.jpg"
import img2 from "./images/img2.jpg"
import img3 from "./images/img3.jpg"
import img4 from "./images/img4.jpg"

export default () => {

    return (
        <div>
            <Menu></Menu>
            <div class="page_body">
                <div class='background_img'/>
                <div class='teste'>
                    <div class="profile_body">
                        <div class="profile_data">
                            <img class="profile_data_pic" src={profile_pic} alt="profile data pic"></img>
                            <p class="profile_name">Nome</p>
                            <p class="profile_info">Info: cidade, idade, genero</p>
                        </div>
                        <div class="profile_menu">
                            <ul class="profile_menu_options">
                                <li>My lists</li>
                                <li>Progress</li>
                                <li>Ratings</li>
                                <li>Friends</li>
                                <li>Settings</li>
                            </ul>
                        </div>
                    </div>

                    <div class="activities">
                            <p>Recently watched</p>

                            <div class='images_grid'>
                                <img src={img1}></img>
                                <img src={img2}></img>
                                <img src={img3}></img>
                                <img src={img4}></img>
                            </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}