import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import "./styles.scss";

export const Auth = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [profilePic, setProfilePic] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const responseGoogle = (response) => {
        const { name, email, imageUrl } = response.profileObj;
        setName(name);
        setEmail(email);
        setProfilePic(imageUrl);
        setIsLoggedIn(true);
    };

    return (
        <div className="containerGoogleAuth">
            <GoogleLogin
                clientId=""
                buttonText="Continuar com o Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
            />
            {isLoggedIn ? (
                <div style={{ textAlign: "center" }}>
                    <h1>User Information</h1>
                    <img src={profilePic} alt="Profile" />
                    <p style={{ color: "#fff" }}>Name: {name}</p>
                    <p>Email: {email}</p>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};
