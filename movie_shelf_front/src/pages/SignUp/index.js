import React, { useState } from "react";
import './styles.scss'
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

export default function Scroll() {
    const [typePassword, setTypePassword] = useState("password");
    const [email, setEmail] = useState();
    const [password, setPasword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const changeTypePassword = () => {
        if (typePassword === "password") {
            setTypePassword("text");
        } else {
            setTypePassword("password");
        }
    };

    return (
<<<<<<< HEAD
        <div className="wrapper-signup">
            <div className="container-signup">
=======
        <div className="wrapper">
            <div className="container">
>>>>>>> e47083bc0710f8ab21bbc991f926d918ebafa8bc
                <div className="content">
                    <h1 className="pageName">Sign Up</h1>
                    <span className="span" style={{ marginBottom: "20px", fontSize: "18px" }}>Create an account to access</span>
                    <div className="inputContent">
                        <FaEnvelope />
                        <input className="input" type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="inputContent">
                        <FaLock />
                        <input className="input" type={typePassword} placeholder="Password" value={password} onChange={(e) => setPasword(e.target.value)} />
                        {typePassword === "password" ? (
                            <FaEye onClick={changeTypePassword} />
                        ) : (
                            <FaEyeSlash onClick={changeTypePassword} />
                        )}
                    </div>
                    <div className="inputContent">
                        <FaLock />
                        <input className="input" type={typePassword} placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        {typePassword === "password" ? (
                            <FaEye onClick={changeTypePassword} />
                        ) : (
                            <FaEyeSlash onClick={changeTypePassword} />
                        )}
                    </div>
                    <button className="buttonLogin" disabled={!email || !password}>CREATE</button>
                    <div>
                        <span className="span">Already have an account? </span>
                        <span className="span" style={{ color: "#ffffff" }}>Log In</span>
                    </div>
                </div>
            </div>
        </div>
    );
};