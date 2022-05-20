import React from 'react'
import imgProfile from "../../assets/profile.png"
import './styles.scss'

export default function Settings() {
    
    return (           
        <div className='wrapper-settings'>
            <div className="container-settings">
                <div className='div-transparence'>
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
                    <div>
                        <h3 className="user-name">Name</h3>
                        <input className="input" type="text" placeholder="User Name"/>
                    </div>
                    <div>
                        <h3 className="user-email">Email</h3>
                        <input className="input" type="text" placeholder="Email@gmailcom"/>
                    </div>
                    <div className='container-intern-settings'>
                        <div>
                            <h3 className="user-age">Age</h3>
                            <input className="input-age" type="text" placeholder="Age"/>
                        </div>
                        <div>
                            <h3 className="user-gender">Gender</h3>
                            <select className="select">
                                <option value="Select" className='option-select'>M</option>
                                <option value="Select" className='option-select'>W</option>
                            </select>
                        </div>
                    </div>
                    <div className="location-container">
                        <h3 className="user-location">Location</h3>
                        <select className="select">
                            <option value="Select" className='option-select'>Bahia</option>
                            <option value="Select" className='option-select'>São Paulo</option>
                            <option value="Select" className='option-select'>...</option>
                        </select>
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
        </div>
    );
}