"use client"
import React, { createContext, useState } from "react";

// Create the context
export const MenuContext = createContext();

// Define the provider component
const MenuContextProvider = ({ children }) => {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        console.log({open});
        setOpen((prev) => !prev);
    };

    return (
        <MenuContext.Provider value={{ open, toggle }}>
            {children}
        </MenuContext.Provider>
    );
};

export default MenuContextProvider;
