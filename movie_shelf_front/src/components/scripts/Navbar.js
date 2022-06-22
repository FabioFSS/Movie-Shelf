import React, { useContext } from 'react'
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import AccountDropdown from "./AccountDropdown";
import NavItem from "./NavItem";
import DropdownMenu from "./DropdownMenu";
import logo from "../../assets/logo.png";
import profile_pic from "../../assets/profile.png";

import { NavContext } from '../../contexts/navbar' 

function Navbar() {

  const { visibility } = useContext(NavContext)

  return (
    <nav className="Navbar" style={{ visibility: visibility }}>
      <div className="leftSide">
        <div className="links">
          <Link to="/tv">TV Shows</Link>
          <Link to="/">Movies</Link>
        </div>
      </div>

      <div className="middleSide">
        <Link to="/">
          <img src={logo} className="logo" />
        </Link>
      </div>

      <div className="rightSide">
        <input type="text" placeholder="Search" />
        <AccountDropdown>
            <NavItem icon={profile_pic} className="profileImg">
              <DropdownMenu></DropdownMenu>
            </NavItem>
        </AccountDropdown>
        <ul className="account-dropdown"></ul>
      </div>
    </nav>
  );
}

export default Navbar;
