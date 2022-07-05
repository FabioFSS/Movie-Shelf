// react
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// components
import AccountDropdown from "./AccountDropdown";
import DropdownMenu from "./DropdownMenu";
import NavItem from "./NavItem";

// assets and styles
import logo from "../../assets/logo.png";
import "../styles/Navbar.css";
import std_profile_pic from "../../assets/standard_profile_picture.png";

// contexts
import { NavContext } from "../../contexts/navbar";
import AuthContext from "../../contexts/AuthContext";

// hooks
import useAxios from "../../utils/useAxios";

import { useNavigate } from "react-router-dom";

import { FaStar, FaPlus, FaComment, FaSearch } from "react-icons/fa";

function Navbar() {
    // contexts
    const { user, userData, setUserData } = useContext(AuthContext);
    const { visibility } = useContext(NavContext);

    // hooks
    const api = useAxios();

    // recovers from the backend the logged user's data
    useEffect(() => {
        const fetchData = async () => {
            if (user) {
                try {
                    const response = await api.get(
                        `/user_profile/${user.username}`
                    );
                    setUserData(response.data);
                } catch {
                    setUserData("Something went wrong");
                }
            }
        };
        fetchData();
    }, []);

    const [search, setSearch] = useState(undefined);
    const navigate = useNavigate();

    function handleSearch() {
        navigate(`/search:keyword=${search}`);
        window.location.reload();
    }

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
                    <img src={logo} alt="logo" className="logo" />
                </Link>
            </div>

            <div className="rightSide">
                {user ? (
                    userData.map((userData) => (
                        <>
                            <input 
                                type="text" 
                                placeholder="Search" 
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />

                            <button className="buttonSearch" onClick={handleSearch}>
                                <FaSearch />
                            </button>   

                            <AccountDropdown>
                                <NavItem
                                    icon={
                                        userData.profile_pic
                                            ? userData.profile_pic
                                            : std_profile_pic
                                    }
                                    className="profileImg"
                                >
                                    <DropdownMenu></DropdownMenu>
                                </NavItem>
                            </AccountDropdown>
                            <ul className="account-dropdown"></ul>
                        </>
                    ))
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
