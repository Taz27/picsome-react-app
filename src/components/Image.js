import React, {useState, useContext} from "react";
import {PicContext} from "../PicContext";

function Image(props) {
    const [hovered, setHovered] = useState(false);

    const {toggleFavorite} = useContext(PicContext);
    
    return (
        <div className={`${props.className} image-container`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <img src={props.img.url} alt="" className="image-grid" />
            {hovered ? 
            <>
                <i className={props.img.isFavorite ? "ri-heart-fill favorite" : "ri-heart-line favorite"} onClick={() => toggleFavorite(props.img.id)}></i>
                <i className="ri-add-circle-line cart"></i>
            </> :
            props.img.isFavorite ? <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(props.img.id)}></i> : undefined}
        </div>
    );
}

export default Image