import React, { useState, useEffect, useContext } from "react";
import styles from './styles.module.css'
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

import { NavContext } from "../../contexts/navbar";

export default function Scroll() {

    const { isVisible } = useContext(NavContext)
    const [nav, setNav] = useState(true)

    useEffect(() => {
        if (nav) {
            isVisible("hidden")
            setNav(false)
        }
    }, [])

    const [typePassword, setTypePassword] = useState("password");
    const [email, setEmail] = useState("");
    const [password, setPasword] = useState("");

    const changeTypePassword = () => {
        if (typePassword === "password") {
            setTypePassword("text");
        } else {
            setTypePassword("password");
        }
    };

    window.scrollTo({
        top: 0
    });

    return (
        <div className={styles.wrapperLogin}>
            <div className={styles.containerLogin}>
                <div className={styles.content}>
                    <h1 className={styles.pageName}>Log in</h1>
                    <span className={styles.infoLogin}>Get login to access your account</span>
                    <div className={styles.inputContent}>
                        <FaEnvelope />
                        <input className={styles.input} type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className={styles.inputContent}>
                        <FaLock />
                        <input className={styles.input} type={typePassword} placeholder="Password" value={password} onChange={(e) => setPasword(e.target.value)} />

                        {typePassword === {password} ? 
                            (<FaEye onClick={changeTypePassword} />) 
                            : 
                            (<FaEyeSlash onClick={changeTypePassword} />)
                        }
                    </div>
                    <span className={styles.span}>
                        <a href="http://localhost:3000/reset">Forget Password</a>
                    </span>
                    <button className={styles.buttonLogin} disabled={!email || !password}>
                        <a href="http://localhost:3000">LOGAR</a>
                    </button>
                    
                    <div className={styles.containerRegister}>
                        <span className={styles.span}>Don't have an account? </span>
                        <span className={styles.registerText}>                            
                            <a href="http://localhost:3000/signup">Register</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};