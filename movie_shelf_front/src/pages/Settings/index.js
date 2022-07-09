// react
import React, { useContext } from "react";

// styles
import styles from "./styles.module.css";

// assets
import std_profile_pic from "../../assets/standard_profile_picture.png"

// contexts
import AuthContext from "../../contexts/AuthContext";

function Settings() {
    // contexts
    const { userData } = useContext(AuthContext);

    window.scrollTo({
        top: 0,
    });

    return (
        <div className={styles.wrapperSettings}>
            {userData.map((userData) => (
                <>
                    <div className={styles.containerSettings}>
                        <div className={styles.divTransparence}>
                            <h1 className={styles.nemeScreen}>Settings</h1>
                            <div className={styles.options}>
                                <img
                                    src={userData.profile_pic ? userData.profile_pic : std_profile_pic}
                                    className={styles.imgProfile}
                                />
                                <div>
                                    {/* <h3>Language</h3>
                                    <select className={styles.select}>
                                        <option
                                            value="Select"
                                            className={styles.optionSelect}
                                        >
                                            pt-BR
                                        </option>
                                        <option
                                            value="Select"
                                            className={styles.optionSelect}
                                        >
                                            en-US
                                        </option>
                                    </select> */}

                                    <h3 className={styles.userLocation}>
                                        Location
                                    </h3>
                                    <select className={styles.select}>
                                        <option
                                            value="Select"
                                            className={styles.optionSelect}
                                        >
                                            Bahia
                                        </option>
                                        <option
                                            value="Select"
                                            className={styles.optionSelect}
                                        >
                                            São Paulo
                                        </option>
                                        <option
                                            value="Select"
                                            className={styles.optionSelect}
                                        >
                                            ...
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <h3 className={styles.userName}>Name</h3>
                                <input
                                    className={styles.input}
                                    type="text"
                                    placeholder="Username"
                                    value={userData.name}
                                />
                            </div>
                            <div>
                                <h3 className={styles.userEmail}>Email</h3>
                                <input
                                    className={styles.input}
                                    type="text"
                                    placeholder="Email@gmailcom"
                                />
                            </div>
                            <div className={styles.containerInternSettings}>
                                <div>
                                    <h3 className={styles.userAge}>Birth date</h3>
                                    <input
                                        className={styles.inputAge}
                                        type="text"
                                        placeholder="Birth date"
                                        value={userData.birth_date}
                                    />
                                </div>
                                <div>
                                    <h3 className={styles.userGender}>
                                        Gender
                                    </h3>
                                    <select className={styles.select}>
                                        <option
                                            value="Select"
                                            className={styles.optionSelect}
                                        >
                                            M
                                        </option>
                                        <option
                                            value="Select"
                                            className={styles.optionSelect}
                                        >
                                            W
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className={styles.caintainerButtons}>
                                <button className={styles.button}>
                                    <p className={styles.textButton}>SAVE</p>
                                </button>
                                <button className={styles.button}>
                                    <p className={styles.textButton}>CANCEL</p>
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
