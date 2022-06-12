import React, { useState, useEffect, useContext } from "react";
import './styles.css'
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
        <div className="wrapper-login">
            <div className="container-login">
                <div className="content">
                    <h1 className="pageName">Log in</h1>
                    <span className='info-login'>Get login to access your account</span>
                    <div className="inputContent">
                        <FaEnvelope />
                        <input className="input" type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="inputContent">
                        <FaLock />
                        <input className="input" type={typePassword} placeholder="Password" value={password} onChange={(e) => setPasword(e.target.value)} />

                        {typePassword === "password" ? 
                            (<FaEye onClick={changeTypePassword} />) 
                            : 
                            (<FaEyeSlash onClick={changeTypePassword} />)
                        }
                    </div>
                    <span className="span">
                        <a href="http://localhost:3000/reset">Forget Password</a>
                    </span>
                    <button className="buttonLogin" disabled={!email || !password}>
                        <a href="http://localhost:3000">LOGAR</a>
                    </button>
                    {/* <Auth /> */}
                    <div className='container-register'>
                        <span className="span">Don't have an account? </span>
                        <span className="register-text">                            
                            <a href="http://localhost:3000/signup">Register</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};