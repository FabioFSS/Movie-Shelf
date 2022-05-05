import React, { useState } from "react";
import './styles.scss'
import { FaEnvelope } from "react-icons/fa";

export default function Scroll() {
    const [email, setEmail] = useState();

    return (
<<<<<<< HEAD
        <div className="wrapper-reset">
            <div className="container-reset">
=======
        <div className="wrapper">
            <div className="container">
>>>>>>> e47083bc0710f8ab21bbc991f926d918ebafa8bc
                <div className="content">
                    <h1 className="pageName">Recover</h1>

                    <span className="span" style={{ marginBottom: "20px", fontSize: "17px" }}>Enter your email to reset password</span>
                    <div className="inputContent">
                        <FaEnvelope />
                        <input className="input" type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <button className="buttonLogin" disabled={!email}>SENDE</button>

                    <div>
                        <span className="span">Have you recovered your password? </span>
                        <span className="span" style={{ color: "#ffffff" }}>Log in</span>
                    </div>
                </div>
            </div>
        </div>
    );
};