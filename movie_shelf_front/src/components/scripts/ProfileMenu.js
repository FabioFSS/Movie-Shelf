import styles from "../styles/ProfileMenu.module.css"

function ProfileMenu(){
    return (
    <div className={styles.profile_menu}>
        <ul className={styles.profile_menu_options}>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/lists">My lists</a></li>
            <li><a href="/progress">Progress</a></li>
            <li><a href="/ratings">Ratings</a></li>
            <li><a href="/settings">Settings</a></li>
        </ul>
    </div>
    );
}

export default ProfileMenu;