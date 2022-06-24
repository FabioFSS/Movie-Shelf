import styles from "../styles/ProfileHeader.module.css";
import ProfileData from "./ProfileData";
import ProfileMenu from "./ProfileMenu";

function ProfileHeader({
    username,
    location,
    language,
    email,
    birth_date,
    bio,
    profile_pic,
}) {
    return (
        <div className={styles.profile_header}>
            <ProfileData
                username={username}
                location={location}
                language={language}
                email={email}
                birth_date={birth_date}
                bio={bio}
                profile_pic={profile_pic}
            ></ProfileData>
            <ProfileMenu></ProfileMenu>
        </div>
    );
}

export default ProfileHeader;
