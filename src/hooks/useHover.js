import { useState, useEffect, useRef } from "react";

function useHover() {
    // Keep track of hover state in this hook
    const [hovered, setHovered] = useState(false);

    //use the useRef hook to create a ref object to store the DOM node
    const ref = useRef(null);

    function enter() {
        setHovered(true);
    }

    function leave() {
        setHovered(false);
    }

    //define useEffect HOOK which will execute as COMPONENTDIDMOUNT class method
    //add the event listeners
    //return the function (to remove event listeners) which will be stored and executed
    //as COMPONENTWILLUNMOUNT lifecycle method
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