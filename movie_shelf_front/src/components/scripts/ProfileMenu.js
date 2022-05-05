import "../styles/ProfileMenu.css"

function ProfileMenu(){
    return (
    <div className="profile_menu">
        <ul className="profile_menu_options">
            <li><a href="/lists">My lists</a></li>
            <li><a href="/progress">Progress</a></li>
            <li><a href="/ratings">Ratings</a></li>
            <li><a href="/settings">Settings</a></li>
        </ul>
    </div>
    );
}

export default ProfileMenu;