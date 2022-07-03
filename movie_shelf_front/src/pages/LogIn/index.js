// react
import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

// styles
import styles from "./styles.module.css";

// contexts
import { NavContext } from "../../contexts/navbar";
import AuthContext from "../../contexts/AuthContext";

export default function Scroll() {
    // states
    const [typePassword, setTypePassword] = useState("password");
    const [username, setUsername] = useState("");
    const [password, setPasword] = useState("");
    const [nav, setNav] = useState(true);

    // contexts
    const { loginUser } = useContext(AuthContext);
    const { isVisible } = useContext(NavContext);

    // hooks
    const navigate = useNavigate();

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

    // handles the user login
    const handleLogin = (e) => {
        e.preventDefault();
        username.length > 0 && loginUser(username, password);
    };

    window.scrollTo({
        top: 0,
    });

    return (
        <div className={styles.wrapperLogin}>
            <div className={styles.containerLogin}>
                <div className={styles.content}>
                    <h1 className={styles.pageName}>Log in</h1>
                    <span className={styles.infoLogin}>
                        Get login to access your account
                    </span>
                    <div className={styles.inputContent}>
                        <FaEnvelope />
                        <input
                            className={styles.input}
                            type="username"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className={styles.inputContent}>
                        <FaLock />
                        <input
                            name="password_input"
                            className={styles.input}
                            type={typePassword}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPasword(e.target.value)}
                        />

                        {typePassword === { password } ? (
                            <FaEye onClick={changeTypePassword} />
                        ) : (
                            <FaEyeSlash onClick={changeTypePassword} />
                        )}
                    </div>
                    <span className={styles.span}>
                            <Link to="/reset">Forgot password</Link>
                    </span>
                    <button
                        className={styles.buttonLogin}
                        disabled={!username || !password}
                        onClick={handleLogin}
                    >
                        <p>LOGAR</p>
                    </button>

                    <div className={styles.containerRegister}>
                        <span className={styles.span}>
                            Don't have an account?{" "}
                        </span>
                        <span className={styles.registerText}>
                            <a href="http://localhost:3000/signup">Register</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
