import React, {useState, useContext} from "react";
import {PicContext} from "../PicContext";
import PropTypes from "prop-types";

function Image(props) {
    const [hovered, setHovered] = useState(false);

    const {toggleFavorite} = useContext(PicContext);
    const {addToCart} = useContext(PicContext);
    
    return (
        <div className={`${props.className} image-container`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <img src={props.img.url} alt="" className="image-grid" />
            {hovered ? 
            <>
                <i className={props.img.isFavorite ? "ri-heart-fill favorite" : "ri-heart-line favorite"} onClick={() => toggleFavorite(props.img.id)}></i>
                <i className="ri-add-circle-line cart" onClick={() => addToCart(props.img)}></i>
            </> :
            props.img.isFavorite ? <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(props.img.id)}></i> : undefined}
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