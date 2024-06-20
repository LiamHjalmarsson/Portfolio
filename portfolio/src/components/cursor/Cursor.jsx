import { useContext } from "react";
import useMousePosition from "../../hooks/useMousePosition";
import { MouseContext } from "../../context/mouseContext";

const Cursor = () => {
    let { x, y } = useMousePosition();
    let { mouseHover, lastHover } = useContext(MouseContext);

    let getCursorStyle = () => {
        let borderStyle;
        switch (lastHover) {
            case 'text':
                borderStyle = 'border-bluePrimary';
                break;
            case 'icon':
                borderStyle = 'border-bluePrimary';
                break;
            case 'link':
            case 'button':
                borderStyle = 'border-red_primary';
                break;
            case 'card':
            default:
                borderStyle = 'border-red_primary';
        }
        return borderStyle;
    };

    let getShadowStyle = () => {
        let shadowStyle;
        switch (mouseHover || lastHover) {
            case 'text':
                shadowStyle = 'opacity-70 shadow-bluePrimary';
                break;
            case 'icon':
                shadowStyle = 'shadow-bluePrimary';
                break;
            case 'link':
            case 'button':
                shadowStyle = 'shadow-red_primary';
                break;
            case 'card':
            default:
                shadowStyle = 'shadow-red_primary';
        }
        return shadowStyle;
    };

    return (
        <>
            <div
                style={{ left: `${x}px`, top: `${y}px` }}
                className={`hidden lg:flex fixed rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out z-[999] pointer-events-none`}
            >
                <div
                    className={`transition-all duration-500 
                        ${mouseHover.length > 0 ? 'border-0 h-0 w-0' :
                            'border-2 h-12 w-12'
                        } 
                        ${getCursorStyle()}
                    `}
                    style={{ animation: 'roll 3s infinite linear' }}
                >
                </div>
            </div>

            <div
                style={{ left: `${x}px`, top: `${y}px` }}
                className={`hidden lg:flex fixed transform -translate-x-1/2 -translate-y-1/2 z-[999] pointer-events-none`}
            >
                <div className={`transition-all duration-300 ease-in-out shadow-middle ${getShadowStyle()}`}>
                </div>
            </div>
        </>
    );
};

export default Cursor;