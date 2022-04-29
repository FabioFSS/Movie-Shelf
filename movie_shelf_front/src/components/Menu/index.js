import React from 'react'
import './styles.scss'
import logo from "../../assets/logo.png";
import profile from "../../assets/profile.png";

export const Menu = () => {
    return (
        <div className='navbar'>
            <div style={{ display: "flex", width: "600px" }}>
                <h1 className='menu'>Tv</h1>
                <h1 className='menu'>Series</h1>
                <h1 className='menu'>Movies</h1>
            </div>
            <img className='logo' src={logo} />
            <div style={{ display: "flex", alignItems: "center", width: "600px" }}>
                <input type="text" name="search" className='serch' placeholder='Search' />
                <img className='profile' src={profile} onclick="" />
            </div>
        </div>
    );
}