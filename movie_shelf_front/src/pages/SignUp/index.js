// react
import React, { useState, useContext, useEffect } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

// styles
import styles from "./styles.module.css";

// contexts
import { NavContext } from "../../contexts/navbar";
import AuthContext from "../../contexts/AuthContext";

export default function Scroll() {
    // contexts
    const { registerUser } = useContext(AuthContext);
    const { isVisible } = useContext(NavContext);

    // states
    const [typePassword, setTypePassword] = useState("password");
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPasword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [nav, setNav] = useState(true);

    // makes the navbar invisible
    useEffect(() => {
        if (nav) {
            isVisible("hidden");
            setNav(false);
        }
    }, []);

    // toggles the password visibility
    const changeTypePassword = () => {
        if (typePassword === "password") {
            setTypePassword("text");
        } else {
            setTypePassword("password");
        }
    };

    // handles the user registration
    const handleRegister = (e) => {
        e.preventDefault();
        username.length > 0 &&
            email.length > 0 &&
            password.length > 0 &&
            confirmPassword.length > 0 &&
            registerUser(username, password, confirmPassword);
        isVisible("visible");
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
                            type="username"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
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
                        onClick={handleRegister}
                    >
                        <p>CREATE</p>
                    </button>
                    <div>
                        <span className={styles.span}>
                            Already have an account?{" "}
                        </span>
                        <span className={styles.login_text}>
                            <Link to="/login">Log In </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
