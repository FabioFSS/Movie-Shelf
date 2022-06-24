import React, { createContext, useState } from "react";

export const NavContext = createContext({});

export default function NavPrivider({ children }) {
    const [visible, setVitible] = useState("visible");

    function isVisible(newVisible) {
        setVitible(newVisible);
    }

    return (
        <NavContext.Provider value={{ visibility: visible, isVisible }}>
            {children}
        </NavContext.Provider>
    );
}
