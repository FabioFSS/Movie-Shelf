import "../styles/ProfileData.css"
import profile_pic from "../../assets/profile.png";

function ProfileData() {
    return (
        <div className="profile_data">
            <img className="profile_data_pic" src={profile_pic} alt="profile data pic"></img>
            <div className="profile_texts">
                <p className="profile_name">Nome</p>
                <p className="profile_info">Info: cidade, idade, genero</p>
            </div>
        </div>
    );
}

export default ProfileData;