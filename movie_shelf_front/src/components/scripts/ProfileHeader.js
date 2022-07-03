// react
import { useContext } from "react";

// styles
import styles from "../styles/ProfileHeader.module.css";

// components
import ProfileData from "./ProfileData";
import ProfileMenu from "./ProfileMenu";

// contexts
import AuthContext from "../../contexts/AuthContext";

// assets
import std_profile_pic from "../../assets/standard_profile_picture.png";

function ProfileHeader() {
    // contexts
    const { userData } = useContext(AuthContext);

    return (
        <div className={styles.profile_header}>
            {userData.map((userData) => (
                <>
                    <ProfileData
                        username={userData.username}
                        location={userData.location}
                        language={userData.language}
                        email={userData.email}
                        birth_date={userData.birth_date}
                        bio={userData.bio}
                        profile_pic={
                            userData.profile_pic
                                ? userData.profile_pic
                                : std_profile_pic
                        }
                    ></ProfileData>
                    <ProfileMenu></ProfileMenu>
                </>
            ))}
        </div>
    );
}

export default ProfileHeader;
