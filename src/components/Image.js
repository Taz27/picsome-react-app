import React, {useState} from "react";

function Image(props) {
    const [hovered, setHovered] = useState(false);
    
    return (
        <div className={`${props.className} image-container`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <img src={props.img.url} alt="" className="image-grid" />
            {hovered ? 
            <>
                <i className="ri-heart-line favorite"></i>
                <i className="ri-add-circle-line cart"></i>
            </> :
            undefined}
        </div>
    );
}

export default Image