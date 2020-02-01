import React, { useContext } from "react";
import PropTypes from "prop-types";
import { PicContext } from "../PicContext";
import useHover from "../hooks/useHover";

function CartItem(props) {
    const [hovered, ref] = useHover();

    let { removeFromCart } = useContext(PicContext);
    let binIconClass = hovered ? "fill" : "line";
    return (
        <div className="cart-item">
            <i ref={ref} className={`ri-delete-bin-${binIconClass}`} onClick={() => removeFromCart(props.item)}></i>
            <img src={props.item.url} width="130px" alt="" />
            <p>$6.99</p>
        </div>
    );
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
};

export default CartItem;