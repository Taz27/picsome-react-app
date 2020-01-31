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
        //Add item to cartItems state array
        setCartItems(prevCart => [...prevCart, img]);
    }

    function removeFromCart(img) {  
        //Remove item from cartItems state array
        setCartItems(prevCart => prevCart.filter(item => item.id !== img.id));
    }
    console.log(JSON.stringify(cartItems));
    
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
        <PicContext.Provider value={{allPhotos, isLoading, toggleFavorite, addToCart, cartItems, removeFromCart}}>
            {props.children}
        </PicContext.Provider>
    );

}
export {PicContextProvider, PicContext};