import styles from "../styles/ProfileHeader.module.css"
import ProfileData from "./ProfileData";
import ProfileMenu from "./ProfileMenu";

function ProfileHeader(){
    return (
        <div className={styles.profile_header}>
            <ProfileData></ProfileData>
            <ProfileMenu></ProfileMenu>
        </div>
    );
}

export default ProfileHeader;