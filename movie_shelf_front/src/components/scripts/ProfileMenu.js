import "../styles/ProfileMenu.css"

function ProfileMenu(){
    return (
    <div className="profile_menu">
        <ul className="profile_menu_options">
            <li><a href="/MyLists">My lists</a></li>
            <li><a href="/">Progress</a></li>
            <li><a href="/">Ratings</a></li>
            <li><a href="/">Settings</a></li>
        </ul>
    </div>
    );
}

export default ProfileMenu;