import React, {useContext} from "react";
import Image from "../components/Image";
import {getClass} from "../utils";
import {PicContext} from "../PicContext";

function Photos() {
    //pull out allPhotos array and isLoading variable from Context
    const {allPhotos, isLoading} = useContext(PicContext);

    //map the allPhotos array and create instances of Image component
    const images = allPhotos.map((pic, i) => <Image key={pic.id} img={pic} className={getClass(i)} />);

    return (
        //display the loading gif while the images data is being fetched from API
        isLoading ? <img src="https://media.giphy.com/media/lpOxKH3VWxTPi/giphy.gif" alt="loading_gif" style={{display: "block", margin: "0 auto"}} /> :
        <main className="photos">
            {images}
        </main>
    );
}

export default Photos;