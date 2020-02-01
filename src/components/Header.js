import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PicContext } from "../PicContext";

function Header() {
    //grab cartItems from Context
    const {cartItems} = useContext(PicContext);
    
    //store the appropriate class to style the cart icon in a variable as per the state of the cart
    let cartIconClass = cartItems.length > 0 ? "fill" : "line";

    return (
        <header>
            <Link to="/"><h2>Pic Some</h2></Link>
            <Link to="/cart"><i className={`ri-shopping-cart-${cartIconClass} ri-fw ri-2x`}></i></Link>
        </header>
    );
}

export default Header;
