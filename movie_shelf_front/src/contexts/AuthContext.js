// react
import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

// other libs
import jwt_decode from "jwt-decode";

// contexts
import { NavContext } from "./navbar";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
    // contexts
    const { isVisible } = useContext(NavContext);

    // states
    const [setNav] = useState(true);
    const [loading, setLoading] = useState(true);
    const [authTokens, setAuthTokens] = useState(() =>
        localStorage.getItem("authTokens")
            ? JSON.parse(localStorage.getItem("authTokens"))
            : null
    );
    const [user, setUser] = useState(() =>
        localStorage.getItem("authTokens")
            ? jwt_decode(localStorage.getItem("authTokens"))
            : null
    );

    // navigation
    const navigate = useNavigate();

    // logs the user in and sets the data for the authentication context
    const loginUser = async (username, password) => {
        const response = await fetch("http://127.0.0.1:8000/token/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
            }),
        });
        const data = await response.json();

        if (response.status === 200) {
            setAuthTokens(data);
            setUser(jwt_decode(data.access));
            localStorage.setItem("authTokens", JSON.stringify(data));
            navigate("/");
            window.location.reload();
        } else {
            alert("Something went wrong!");
        }
    };

    // registers the user and sets the data for the authentication context
    const registerUser = async (username, password, password2) => {
        const response = await fetch("http://127.0.0.1:8000/register/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                password2,
            }),
        });
        if (response.status === 201) {
            navigate("/login");
        } else {
            alert("Something went wrong!");
        }
    };

    // logs the user out
    const logoutUser = () => {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem("authTokens");
        navigate("/");
        isVisible("visible");
        setNav(true);
    };

    // context data definition
    const contextData = {
        user,
        setUser,
        authTokens,
        setAuthTokens,
        registerUser,
        loginUser,
        logoutUser,
    };

    // sets the user if there is an authtoken
    useEffect(() => {
        if (authTokens) {
            setUser(jwt_decode(authTokens.access));
        }
        setLoading(false);
    }, [authTokens, loading]);

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? null : children}
        </AuthContext.Provider>
    );
};
