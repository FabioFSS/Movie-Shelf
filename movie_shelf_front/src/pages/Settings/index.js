// react
import React, { useContext, useState } from "react";

// styles
import styles from "./styles.module.css";

// contexts
import AuthContext from "../../contexts/AuthContext";

import useAxios from "../../utils/useAxios";

function Settings() {
    // contexts
    const { userData } = useContext(AuthContext);

    const { user } = useContext(AuthContext);

    const api = useAxios();

    const [name, setName] = useState(null);
    const [profile_pic, setProfilePic] = useState(null);
    const [birth_date, setBirthDate] = useState(null);
    const [gender, setGender] = useState(null);
    const [location, setLocation] = useState(null);
    const [bio, setBio] = useState(null);

    window.scrollTo({
        top: 0,
    });

    console.log(gender)
    const updateUser = async () => {

        const baseURL = `/user_profile/${user.username}`;

        api.post(baseURL, {
            name,
            profile_pic,
            birth_date,
            gender,
            location,
            bio
        })
        .then((response) => {
            if (response.status == 200) {
                alert("Salvo com sucesso!");
            }else {
                alert("Ops, algo deu errado!!");
            }
        });
                
    }

    return (
        <div className={styles.wrapperSettings}>
            {userData.map((userData) => (
                <>
                    <div className={styles.containerSettings}>
                        <div className={styles.divTransparence}>
                            <h1 className={styles.nemeScreen}>Settings</h1>
                            <div>
                                <h3 className={styles.userName}>Name</h3>
                                <input
                                    className={styles.input}
                                    type="text"
                                    placeholder="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div>
                                <h3 className={styles.userName}>Bio</h3>
                                <input
                                    className={styles.input}
                                    type="text"
                                    placeholder="Yuor bio"
                                    value={bio}
                                    onChange={(e) => setBio(e.target.value)}
                                />
                            </div>
                            <div>
                                <h3 className={styles.userEmail}>Location</h3>
                                <input
                                    className={styles.input}
                                    type="text"
                                    placeholder="location"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                />
                            </div>
                            <div className={styles.containerInternSettings}>
                                <div>
                                    <h3 className={styles.userAge}>Birth date</h3>
                                    <input
                                        className={styles.inputAge}
                                        type="text"
                                        placeholder="Birth date"
                                        value={birth_date}
                                        onChange={(e) => setBirthDate(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <h3 className={styles.userGender}>
                                        Gender
                                    </h3>
                                    <select className={styles.select} onChange={(e) => setGender(e.target.value)}>
                                        <option
                                            value={gender}
                                            className={styles.optionSelect}
                                        >
                                            M
                                        </option>
                                        <option
                                            value={gender}
                                            className={styles.optionSelect}
                                        >
                                            W
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className={styles.caintainerButtons}>
                                <button className={styles.button} onClick={updateUser}>
                                    <p className={styles.textButton}>SAVE</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            ))}
        </div>
    );
}

export default Settings;
