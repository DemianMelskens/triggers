import { Fragment, useEffect } from "react";
import { useOnScreen } from "./hooks/hooks";

type Props = {
    onScreenEnter?: (isVisible: boolean) => void;
    onScreenLeave?: (isVisible: boolean) => void;
    options?: IntersectionObserverInit;
    children?: JSX.Element | JSX.Element[];
    className?: string;
};

export const Waypoint: React.FC<Props> = ({ onScreenEnter, onScreenLeave, options, children, className}) => {
    const [setRef, isVisible] = useOnScreen(options);

    useEffect(() => {
        isVisible ? onScreenEnter?.(isVisible) : onScreenLeave?.(isVisible);
    }, [isVisible]);

    return (
        <div ref={setRef} className={className}>
            {children}
        </div>
    );
}