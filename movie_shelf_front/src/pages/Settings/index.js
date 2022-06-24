import React from "react";
import imgProfile from "../../assets/profile.png";
import styles from "./styles.module.css";

export default function Settings() {
    window.scrollTo({
        top: 0,
    });

    return (
        <div className={styles.wrapperSettings}>
            <div className={styles.containerSettings}>
                <div className={styles.divTransparence}>
                    <h1 className={styles.nemeScreen}>Settings</h1>
                    <div className={styles.options}>
                        <img src={imgProfile} className={styles.imgProfile} />
                        <div>
                            <h3>Language</h3>
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
                            </select>

                            <h3 className={styles.userLocation}>Location</h3>
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
                            placeholder="User Name"
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
                            <h3 className={styles.userAge}>Age</h3>
                            <input
                                className={styles.inputAge}
                                type="text"
                                placeholder="Age"
                            />
                        </div>
                        <div>
                            <h3 className={styles.userGender}>Gender</h3>
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
        </div>
    );
}
