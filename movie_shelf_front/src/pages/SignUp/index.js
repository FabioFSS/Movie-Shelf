import React, { useState, useContext, useEffect } from "react";
import styles from "./styles.module.css";

import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

import { NavContext } from "../../contexts/navbar";

export default function Scroll() {
    const [typePassword, setTypePassword] = useState("password");
    const [email, setEmail] = useState();
    const [password, setPasword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const { isVisible } = useContext(NavContext);
    const [nav, setNav] = useState(true);

    useEffect(() => {
        if (nav) {
            isVisible("hidden");
            setNav(false);
        }
    }, []);

    const changeTypePassword = () => {
        if (typePassword === "password") {
            setTypePassword("text");
        } else {
            setTypePassword("password");
        }
    };

    window.scrollTo({
        top: 0,
    });

    return (
        <div className={styles.wrapper_signup}>
            <div className={styles.container_signup}>
                <div className={styles.content}>
                    <h1 className={styles.page_name}>Sign Up</h1>
                    <span className={styles.info_signup}>
                        Create an account to access
                    </span>
                    <div className={styles.input_content}>
                        <FaEnvelope />
                        <input
                            className={styles.input}
                            type="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={styles.input_content}>
                        <FaLock />
                        <input
                            className={styles.input}
                            type={typePassword}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPasword(e.target.value)}
                        />
                        {typePassword === "password" ? (
                            <FaEye onClick={changeTypePassword} />
                        ) : (
                            <FaEyeSlash onClick={changeTypePassword} />
                        )}
                    </div>
                    <div className={styles.input_content}>
                        <FaLock />
                        <input
                            className={styles.input}
                            type={typePassword}
                            placeholder="Confirm password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        {typePassword === "password" ? (
                            <FaEye onClick={changeTypePassword} />
                        ) : (
                            <FaEyeSlash onClick={changeTypePassword} />
                        )}
                    </div>
                    <button
                        className={styles.button_sign_up}
                        disabled={!email || !password}
                    >
                        <a href="http://localhost:3000">CREATE</a>
                    </button>
                    <div>
                        <span className={styles.span}>
                            Already have an account?{" "}
                        </span>
                        <span className={styles.login_text}>
                            <a href="http://localhost:3000/login">Log In</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
