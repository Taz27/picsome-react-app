import React, { useContext } from "react";
import { PicContext } from "../PicContext";
import CartItem from "../components/CartItem";

function Cart() {
    //pull out cartItems and placeOrder function from the Context
    const { cartItems, placeOrder } = useContext(PicContext);

    //map the cartItems array and store instances of CartItem component (with props) in a new array
    const cartItemsElements = cartItems.map(item => {
        return <CartItem key={item.id} item={item} />
    });

    //calculate the total amount
    let totAmt = cartItems.length * 6.99;

    //define a function to render the order button if there are items in cart
    function showOrderButton() {
        if (cartItems.length > 0) {
            return (<div className="order-button">
                        <button onClick={placeOrder}>Place Order</button>
                    </div>);
        } else {
            //if the cart is empty, display the following element
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