import React, {useState, useContext} from "react";
import {PicContext} from "../PicContext";
import PropTypes from "prop-types";

function Image(props) {
    const [hovered, setHovered] = useState(false);

    const {toggleFavorite, addToCart, cartItems, removeFromCart} = useContext(PicContext);

    let isAlreadyInCart = cartItems.some(pic => pic.id === props.img.id);
    
    return (
        <div className={`${props.className} image-container`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
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

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
};

export default Image