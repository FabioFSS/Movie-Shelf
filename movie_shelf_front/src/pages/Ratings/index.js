import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { api, apiKey, language } from "../../services/api";
import Navbar from '../../components/scripts/Navbar';
import './styles.scss'

export default function Ratings() {
    
    return (           
        <div className='wrapper'>  
            <div className='details-navbar'>
                <Router>
                    <Navbar />
                </Router>
            </div>          
            <h1>Ratings Page</h1>
        </div>
    );
}