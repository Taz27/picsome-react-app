import React, {useState} from "react";
const PicContext = React.createContext();

function PicContextProvider(props) {
    const [allPhotos, setAllPhotos] = useState([]);

    return (
        <PicContext.Provider value={{allPhotos, setAllPhotos}}>
            {props.children}
        </PicContext.Provider>
    );

}
export {PicContextProvider, PicContext};