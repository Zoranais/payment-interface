import { useEffect, useState } from "react";

const useWindowSize = () => {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        let timeoutId: number | null;

        const updateDimensions = () => {
            if (timeoutId) clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setSize({ width: window.innerWidth, height: window.innerHeight });
            }, 80); // debounce to prevent rapid rerender while resizing
        };

        window.addEventListener("resize", updateDimensions);
        return () => {
            if (timeoutId) clearTimeout(timeoutId);
            window.removeEventListener("resize", updateDimensions);
        };
    }, []);

    return size;
};

export default useWindowSize;
