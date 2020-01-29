import React, {useState, useEffect} from "react";
const PicContext = React.createContext();

function PicContextProvider(props) {
    const [allPhotos, setAllPhotos] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
            .then(response => response.json())
            .then(data => setAllPhotos(data))
    }, []);

    return (
        <PicContext.Provider value={{allPhotos, setAllPhotos}}>
            {props.children}
        </PicContext.Provider>
    );

}
export {PicContextProvider, PicContext};