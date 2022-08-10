import { Dispatch, useEffect, useState } from "react";

export function useOnScreen(options?: IntersectionObserverInit): [Dispatch<React.SetStateAction<Element | null>>, boolean] {
    const [ref, setRef] = useState<Element | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    const onIntersect = (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    }

    useEffect(() => {
        const observer = new IntersectionObserver(onIntersect, options);
        if (ref) {
            observer.observe(ref);
        }

        return () => {
            if (ref) {
                observer.unobserve(ref);
            }
        }
    }, [ref, options]);

    return [setRef, isVisible];
}