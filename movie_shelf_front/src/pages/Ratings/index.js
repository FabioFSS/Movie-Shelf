import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../../components/scripts/Navbar';
import capa from "../../components/image-item/berserk.jpg"
import profile from "../../assets/profile.png"
import { FaTrash } from "react-icons/fa";
import './styles.scss'

const comments = [
    {comment: "Muito bom!"},
    {comment: "Não gostei da animação"},
    {comment: "História muito boa!"},
    {comment: "Não recomendo."}
]


export default function Ratings() {
    
    return (           
        <div className='wrapper-ratings'>  
            <div className='details-navbar'>
                <Router>
                    <Navbar />
                </Router>
            </div> 
            <div className='cotainer-cards'>
                {
                    comments.map((item, key) => (
                        <div className='container-ratings' key={key}>
                            <img src={capa} className="folder-rating"/>
                            <div className='container-info-card'>
                                <div className='info-card'>
                                    <img src={profile} className="profile-img"/>
                                    <p className='name-user'>Name User</p>
                                    <FaTrash size={20} color="white" className='icons-trash'/>
                                </div>
                                <p className='comments-card'>{item.comment}</p>
                            </div>
                        </div>
                    ))  
                }       
            </div>
        </div>
    );
}