import styles from "../styles/ProfileData.module.css";
import profile_pic from "../../assets/profile.png";
import axios from "axios";
import { useEffect, useState } from "react";

function ProfileData() {
    let user_id = 2;
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/user/${user_id}`).then((res) => {
            setUser(res.data);
        });
    }, []);

    return (
        <div className={styles.profile_data}>
            {user.map((user, id) => (
                <img
                    className={styles.profile_data_pic}
                    src={user.profile_pic}
                    alt="profile data pic"
                ></img>
            ))}
            {user.map((user, id) => (
                <div className={styles.profile_texts}>
                    <p className={styles.profile_name}>{user.username}</p>
                    <p className={styles.profile_info}>
                        Location/language: {user.location}/{user.language}
                    </p>
                    <p className={styles.profile_info}>Email: {user.email}</p>
                    <p className={styles.profile_info}>
                        Birth date: {user.birth_date}
                    </p>
                    <p className={styles.profile_info}>Biography: {user.bio}</p>
                </div>
            ))}
        </div>
    );
}

export default ProfileData;
