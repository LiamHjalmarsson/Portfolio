import React, { createContext, useEffect, useState } from "react";

export const MouseContext = createContext({
    cursorType: false,
    cursorChangeHandler: () => { },
});

const MouseContextProvider = (props) => {
    let [mouseHover, setMouseHover] = useState("");
    let [lastHover, setLastHover] = useState("");

    let cursorChangeHandler = (type) => {
        setMouseHover(type);
    };
    
    useEffect(() => {
        if (mouseHover) {
            setLastHover(mouseHover);
        }
    }, [mouseHover]);

    return (
        <MouseContext.Provider
            value={{
                mouseHover,
                lastHover,
                cursorChangeHandler
            }}
        >
            {props.children}
        </MouseContext.Provider>
    );
};

export default MouseContextProvider;
