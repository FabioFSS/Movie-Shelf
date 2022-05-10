import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../../components/scripts/Navbar';
import imgProfile from "../../assets/profile.png"
import './styles.scss'

export default function Settings() {
    
    return (           
        <div className='wrapper'>
            <div className='details-navbar'>
                <Router>
                    <Navbar />
                </Router>
            </div>
            <div className="container-settings">
                <h1 className='neme-screen'>Settings</h1>
                <div className="options">
                    <img src={imgProfile} className="img-profile"/>
                    <div>
                        <h3>Language</h3>
                        <select className="select">
                            <option value="Select" className='option-select'>pt-BR</option>
                            <option value="Select" className='option-select'>en-US</option>
                        </select>
                        <h3>Theme</h3>
                        <select className="select">
                            <option value="Select" className='option-select'>Dark</option>
                            <option value="Select" className='option-select'>Light</option>
                        </select>
                    </div>
                </div>
                <div className='caintainer-buttons'>
                    <button className='button'>
                        <p className='text-button'>SAVE</p>
                    </button>
                    <button className='button'>
                        <p className='text-button'>CANCEL</p>
                    </button>
                </div>
            </div>
        </div>
    );
}