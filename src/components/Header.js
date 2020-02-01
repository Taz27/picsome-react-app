import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PicContext } from "../PicContext";

function Header() {
    const {cartItems} = useContext(PicContext);
    let cartIconClass = cartItems.length > 0 ? "fill" : "line";

    return (
        <header>
            <Link to="/"><h2>Pic Some</h2></Link>
            <Link to="/cart"><i className={`ri-shopping-cart-${cartIconClass} ri-fw ri-2x`}></i></Link>
        </header>
    );
}

export default Header;
