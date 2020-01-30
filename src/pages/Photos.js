import React, {useContext} from "react";
import Image from "../components/Image";
import {getClass} from "../utils";
import {PicContext} from "../PicContext";

function Photos() {
    const {allPhotos} = useContext(PicContext);
    const {isLoading} = useContext(PicContext);
    //console.log(allPhotos);
    
    const images = allPhotos.map((pic, i) => <Image key={pic.id} img={pic} className={getClass(i)} />);

    return (
        isLoading ? <img src="https://media.giphy.com/media/lpOxKH3VWxTPi/giphy.gif" alt="loading_gif" style={{display: "block", margin: "0 auto"}} /> :
        <main className="photos">
            {images}
        </main>
    );
}

export default Photos;