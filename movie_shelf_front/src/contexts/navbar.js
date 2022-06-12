import React, { createContext, useState } from 'react'

export const NavContext = createContext({})

export default function NavPrivider({ children }) {

    const [visible, setVitible] = useState("hidden");

    function isVisible() {
        setVitible(visible == "hidden" ? "visible" : "hidden")
    }

    return(
        <NavContext.Provider value={{ visibility: visible, isVisible }}>
            {children}
        </NavContext.Provider>
    )
}