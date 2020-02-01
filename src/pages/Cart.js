import React, { useContext } from "react";
import { PicContext } from "../PicContext";
import CartItem from "../components/CartItem";

function Cart() {
    const { cartItems } = useContext(PicContext);
    const cartItemsElements = cartItems.map(item => {
        return <CartItem key={item.id} item={item} />
    });

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemsElements}
            <p className="total-cost">Total: </p>
            <div className="order-button">
                <button>Place Order</button>
            </div>
        </main>
    );
}

export default Cart;