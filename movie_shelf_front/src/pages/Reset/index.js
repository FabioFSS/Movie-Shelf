// react
import React, { useState, useContext, useEffect } from "react";
import { FaEnvelope } from "react-icons/fa";

// styles
import styles from "./styles.module.css";

// contexts
import { NavContext } from "../../contexts/navbar";

export default function Scroll() {
    // contexts
    const { isVisible } = useContext(NavContext);

    // states
    const [email, setEmail] = useState();
    const [nav, setNav] = useState(true);

    useEffect(() => {
        if (nav) {
            isVisible("hidden");
            setNav(false);
        }
    }, []);

    window.scrollTo({
        top: 0,
    });

    return (
        <div className={styles.wrapper_reset}>
            <div className={styles.container_reset}>
                <div className={styles.content}>
                    <h1 className={styles.page_name}>Recover</h1>

                    <span className={styles.info_reset}>
                        Enter your email to reset password
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

                    <button className={styles.button_send} disabled={!email}>
                        <a href="http://localhost:3000/login">SENDE</a>
                    </button>

                    <div>
                        <span className={styles.span}>
                            Have you recovered your password?{" "}
                        </span>
                        <span className={styles.text_login}>
                            <a href="http://localhost:3000/login">Log in</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
