import React, { createContext, useEffect, useState } from "react";

export const MouseContext = createContext({
    cursorType: "",
    setCursorType: () => { },
    position: {
        x: null,
        y: null
    }
});

const MouseContextProvider = ({ children }) => {
    let [cursorType, setCursorType] = useState("");
    let [position, setPosition] = useState({
        x: null,
        y: null
    });

    // Track the mouse cursor position
    useEffect(() => {
        let handleMouseMove = (event) => {
            setPosition({
                x: event.clientX,
                y: event.clientY,
            });
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => document.removeEventListener("mousemove", handleMouseMove);

    }, []);

    return (
        <MouseContext.Provider
            value={{
                cursorType,
                setCursorType,
                position
            }}
        >
            {children}
        </MouseContext.Provider>
    );
};

export default MouseContextProvider;
