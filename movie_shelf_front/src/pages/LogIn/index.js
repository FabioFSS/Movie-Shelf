import React, { useState } from "react";
import './styles.scss'
import { Auth } from "../../components/Auth"
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

export default function Scroll() {
    const [typePassword, setTypePassword] = useState("password");
    const [email, setEmail] = useState();
    const [password, setPasword] = useState();

    const changeTypePassword = () => {
        if (typePassword === "password") {
            setTypePassword("text");
        } else {
            setTypePassword("password");
        }
    };

    return (
        <div className="wrapper">
            <div className="container">
                <div className="content">
                    <h1 className="pageName">Log in</h1>

                    <span className="span" style={{ marginBottom: "20px", fontSize: "18px" }}>Get login to access your account</span>
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
                    <span className="span">Forget Password</span>

                    <button className="buttonLogin" disabled={!email || !password}>LOGAR</button>
                    <Auth />
                    <div style={{marginTop: "20px"}}>
                        <span className="span">Don't have an account? </span>
                        <span className="span" style={{ color: "#ffffff" }}>Register</span>
                    </div>
                </div>
            </div>
        </div>
    );
};