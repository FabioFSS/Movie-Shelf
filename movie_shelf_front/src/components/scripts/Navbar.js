import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import AccountDropdown from "./AccountDropdown";
import NavItem from "./NavItem";
import DropdownMenu from "./DropdownMenu";
import logo from "../../assets/logo.png";
import profile_pic from "../../assets/profile.png";

function Navbar() {
  return (
    <nav className="Navbar">
      <div className="leftSide">
        <div className="links">
          <Link to="/">TV Shows</Link>
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
