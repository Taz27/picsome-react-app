import { useState, useEffect, useRef } from "react";

function useHover() {
    // Keep track of hover state in this hook
    const [hovered, setHovered] = useState(false);
    const ref = useRef(null);

    function enter() {
        setHovered(true);
    }

    function leave() {
        setHovered(false);
    }

    useEffect(() => {
        function removeEL() {
            ref.current.removeEventListener("mouseenter", enter);
            ref.current.removeEventListener("mouseleave", leave);    
        }

        ref.current.addEventListener("mouseenter", enter);
        ref.current.addEventListener("mouseleave", leave);

        return removeEL;
    }, []);

    return [hovered, ref];
}

export default useHover;