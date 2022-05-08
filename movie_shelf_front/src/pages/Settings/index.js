import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { api, apiKey, language } from "../../services/api";
import Navbar from '../../components/scripts/Navbar';
import './styles.scss'

export default function Settings() {
    
    return (           
        <div className='wrapper'>
            <div className='details-navbar'>
                <Router>
                    <Navbar />
                </Router>
            </div>
            <div classsName="container-settings">
                <h1>Settings</h1>
                <div>
                    <img/>
                    <div>
                        <h3>Language</h3>
                        <h3>Theme</h3>
                        <h3>...</h3>
                    </div>
                </div>
                <div>
                    <button>
                        <p>SAVE</p>
                    </button>
                    <button>
                        <p>CANCEL</p>
                    </button>
                </div>
            </div>
        </div>
    );
}