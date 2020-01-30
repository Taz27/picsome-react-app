import React, {useState, useEffect} from "react";
const PicContext = React.createContext();

function PicContextProvider(props) {
    const [allPhotos, setAllPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    function toggleFavorite(imgId) {
        //console.log(imgId);
        let newImgArray = allPhotos.map(pic => {
            if (pic.id === imgId) {
                return {...pic, isFavorite: !pic.isFavorite} 
            }
            return pic;
        });

        if (typeof(Storage) !== "undefined") {
            localStorage.setItem("photosArray", JSON.stringify(newImgArray));
        }

        setAllPhotos(newImgArray);
    }

    function addToCart(img) {
        let found = false;
        for(let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id === img.id) {
                found = true;
                break;
            }
        }

        if (!found) {
            setCartItems(prevCart => [...prevCart, img]);
        }
        
    }
    //console.log(JSON.stringify(cartItems));
    
    // useEffect(() => {
    //     //get all the favorite photos in a new array
    //     let favPhotos = allPhotos.filter(pic => pic.isFavorite);
    //     //console.log("fav pics: " + JSON.stringify(favPhotos));
        
    //     //Store Favorited Photos in session
    //     localStorage.setItem("favoritePics", JSON.stringify(favPhotos));
    // }, [allPhotos]);
    
    useEffect(() => {
        if (typeof(Storage) !== "undefined") {
            if (localStorage.photosArray) {
                let picArray = JSON.parse(localStorage.photosArray);
                setAllPhotos(picArray);
                return;
            }
        }
        
        setIsLoading(true);

        fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
            .then(response => response.json())
            .then(data => {
                setAllPhotos(data);
                setIsLoading(false);
            })
    }, []);

    return (
        <PicContext.Provider value={{allPhotos, isLoading, toggleFavorite, addToCart}}>
            {props.children}
        </PicContext.Provider>
    );

}
export {PicContextProvider, PicContext};