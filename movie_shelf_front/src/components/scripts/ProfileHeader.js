import "../styles/ProfileHeader.css"
import ProfileData from "./ProfileData";
import ProfileMenu from "./ProfileMenu";

function ProfileHeader(){
    return (
        <>
        <div className="profile_header">
            <ProfileData></ProfileData>
            <ProfileMenu></ProfileMenu>
        </div>
        </>
    );
}

export default ProfileHeader;