import React, { useContext } from "react";
import PropTypes from "prop-types";
import { PicContext } from "../PicContext";
import useHover from "../hooks/useHover";

function CartItem(props) {
    //get hovered state variable and the React ref object from the custom hook
    const [hovered, ref] = useHover();

    //get removeFromCart function from Context
    let { removeFromCart } = useContext(PicContext);
    //choose appropriate style class for bin icon as per hovered state
    let binIconClass = hovered ? "fill" : "line";

    return (
        <div className="cart-item">
            <i ref={ref} className={`ri-delete-bin-${binIconClass}`} onClick={() => removeFromCart(props.item)}></i>
            <img src={props.item.url} width="130px" alt="" />
            <p>$6.99</p>
        </div>
    );
}

//add a propTypes property to the component to set the acceptable types of props passed 
CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
};

export default CartItem;