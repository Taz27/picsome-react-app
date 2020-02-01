import React, { useContext } from "react";
import { PicContext } from "../PicContext";

function CartItem(props) {
    let { removeFromCart } = useContext(PicContext);
    return (
        <div className="cart-item">
            <i className="ri-delete-bin-line" onClick={() => removeFromCart(props.item)}></i>
            <img src={props.item.url} width="130px" alt="" />
            <p>$6.99</p>
        </div>
    );
}

export default CartItem;