// styles
import styles from "../styles/ProfileData.module.css";

function ProfileData({
    username,
    location,
    birth_date,
    bio,
    profile_pic,
}) {
    return (
        <div className={styles.profile_data}>
            <img
                className={styles.profile_data_pic}
                src={profile_pic}
                alt="profile data pic"
            ></img>

            <div className={styles.profile_texts}>
                {username ? (
                    <>
                    <p className={styles.profile_name}>{username}</p>
                    <p className={styles.profile_info}>
                        Location: {location}
                    </p>
                    <p className={styles.profile_info}>Birth date: {birth_date}</p>
                    <p className={styles.profile_info}>Biography: {bio}</p>
                    </>

                ): (
                    <p className={styles.profile_name}>Add your name on settings</p>
                )}
            </div>
        </div>
    );
}

export default ProfileData;
