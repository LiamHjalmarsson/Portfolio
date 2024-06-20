import { useEffect, useState } from "react";

export default function useMousePosition() {
    let [mousePosition, setMousePosition] = useState(
        {
            x: null,
            y: null
        }
    );

    useEffect(() => {
        let mouseMoveHandler = (event) => {
            let { clientX, clientY } = event;
            setMousePosition(
                {
                    x: clientX,
                    y: clientY
                }
            );
        };

        document.addEventListener("mousemove", mouseMoveHandler);

        return () => {
            document.removeEventListener("mousemove", mouseMoveHandler);
        };
    }, []);

    return mousePosition;
}
