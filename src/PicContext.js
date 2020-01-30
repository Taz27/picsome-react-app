import React, {useState, useEffect} from "react";
const PicContext = React.createContext();

function PicContextProvider(props) {
    const [allPhotos, setAllPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
            .then(response => response.json())
            .then(data => {
                setAllPhotos(data);
                setIsLoading(false);
            })
    }, []);

    return (
        <PicContext.Provider value={{allPhotos, isLoading}}>
            {props.children}
        </PicContext.Provider>
    );

}
export {PicContextProvider, PicContext};