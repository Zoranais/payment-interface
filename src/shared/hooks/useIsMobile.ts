import { useMemo } from "react";
import useWindowSize from "./useWindowSize";

const useIsMobile = () => {
    const { width } = useWindowSize();
    const isMobile = useMemo(() => width < 1000, [width]);

    return isMobile;
};

export default useIsMobile;
