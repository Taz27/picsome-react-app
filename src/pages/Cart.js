import React, { useContext } from "react";
import { PicContext } from "../PicContext";
import CartItem from "../components/CartItem";

function Cart() {
    const { cartItems, placeOrder } = useContext(PicContext);
    const cartItemsElements = cartItems.map(item => {
        return <CartItem key={item.id} item={item} />
    });
    let totAmt = cartItems.length * 6.99;

    function showOrderButton() {
        if (cartItems.length > 0) {
            return (<div className="order-button">
                        <button onClick={placeOrder}>Place Order</button>
                    </div>);
        } else {
            return <p>You have no items in your cart.</p>
        }
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemsElements}
            <p className="total-cost">Total: {totAmt.toLocaleString("en-AU", {style: "currency", currency: "AUD"})}</p>
            {showOrderButton()}
        </main>
    );
}

export default Cart;