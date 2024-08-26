import { useContext } from "react";
import { MouseContext } from "../../context/mouseContext";

const Cursor = () => {
    let { cursorType, position } = useContext(MouseContext);
    let { x, y } = position;

    let getShadowStyle = () => {
        let shadowStyle;
        switch (cursorType) {
            case 'text':
                shadowStyle = 'opacity-80 shadow-bluePrimary';
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

    if (!x || !y) return null;

    return (
        <div
            style={{ left: `${x}px`, top: `${y}px` }}
            className={`hidden lg:flex fixed transform -translate-x-1/2 -translate-y-1/2 z-[999] pointer-events-none`}
        >
            <div className={`transition-all duration-300 ease-in-out shadow-middle ${getShadowStyle()}`}>
            </div>
        </div>
    );
};

export default Cursor;