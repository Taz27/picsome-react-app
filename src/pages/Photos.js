import React, {useContext} from "react";
import Image from "../components/Image";
import {getClass} from "../utils";
import {PicContext} from "../PicContext";

function Photos() {
    const {allPhotos} = useContext(PicContext);
    //console.log(allPhotos);
    
    const images = allPhotos.map((pic, i) => <Image key={pic.id} img={pic} className={getClass(i)} />);

    return (
        <main className="photos">
            {images}
        </main>
    );
}

export default Photos;