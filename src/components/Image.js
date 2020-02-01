import React, { useContext } from "react";
import { PicContext } from "../PicContext";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";

function Image(props) {
    //get hovered state and ref object from custom hook
    const [hovered, ref] = useHover();

    //pull out the required variables from Context
    const {toggleFavorite, addToCart, cartItems, removeFromCart} = useContext(PicContext);

    //check if this image is already in cart to style the cart icon accordingly
    let isAlreadyInCart = cartItems.some(pic => pic.id === props.img.id);
    
    return (
        <div className={`${props.className} image-container`} ref={ref}>
            <img src={props.img.url} alt="" className="image-grid" />
            {hovered ? 
            <>
                <i className={props.img.isFavorite ? "ri-heart-fill favorite" : "ri-heart-line favorite"} onClick={() => toggleFavorite(props.img.id)}></i>
                {isAlreadyInCart ? 
                    <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(props.img)}></i> :
                    <i className="ri-add-circle-line cart" onClick={() => addToCart(props.img)}></i>}
            </> :
            <>
                {props.img.isFavorite ? <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(props.img.id)}></i> : undefined}
                {isAlreadyInCart ? <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(props.img)}></i> : undefined}
            </>}    
        </div>
    );
}

//add a propTypes property to the component to set the acceptable types of props passed 
Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
};

export default Image