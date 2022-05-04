import React, { useState } from 'react';
import '../styles/Navbar.css';

import { Link as NavLink } from 'react-router-dom';
import AccountDropdown from './AccountDropdown';
import NavItem from './NavItem';
import DropdownMenu from './DropdownMenu';


import logo from '../../logo.png';
import kiritoicon from '../image-item/kiritoprofile.png';//'./image-item/kiritoprofile.png';

function Navbar() {


    return (
        <nav className="Navbar">

            <div className="leftSide">
                <div className="links">
                    <NavLink to="/">Tv series</NavLink>
                    <NavLink to="/">Movies</NavLink>
                </div>
            </div>


            <div className="middleSide">
                <NavLink to="/">
                    <img src={logo} className="logo" />
                </NavLink>
            </div>
            <div className="rightSide">
                <input type="text" placeholder="Search..." />
                <AccountDropdown>
                    <li>
                        <NavItem icon={kiritoicon} id='profileImg'>
                            <DropdownMenu></DropdownMenu>
                        </NavItem>
                    </li>

                </AccountDropdown>
                <ul className='account-dropdown'>

                </ul>
            </div>

        </nav>
    );
}

export default Navbar;