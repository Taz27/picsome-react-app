import React, {useState, useEffect} from "react";
//create a React Context object to store state variables and functions as globals 
const PicContext = React.createContext();

function PicContextProvider(props) {
    const [allPhotos, setAllPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    function toggleFavorite(imgId) {
        //console.log(imgId);
        //toggle the isFavorite property of image objects stored in array
        let newImgArray = allPhotos.map(pic => {
            if (pic.id === imgId) {
                return {...pic, isFavorite: !pic.isFavorite} 
            }
            return pic;
        });
        //if the browser supports local storage, store the photos data in the window.localStorage object
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem("photosArray", JSON.stringify(newImgArray));
        }
        //set the new photos array in the state
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
    
    function placeOrder(e) {
        //const event = {...e};
        e.persist();
    
        e.target.innerText = "Ordering...";
        setTimeout(() => {
            console.log("Order Placed!");
            e.target.innerText = "Place Order";
            setCartItems([]);
        }, 3000);
    }
    //define useEffect HOOK which will execute as COMPONENTDIDMOUNT class method
    useEffect(() => {
        //check if photos data exists in browser's local storage. if it exists, load the initial state
        //from it rather than making a fetch call to the API
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
        //store all the required state variables and functions in the 'value' object of the Context Provider so that they are available globally
        <PicContext.Provider value={{allPhotos, isLoading, toggleFavorite, addToCart, cartItems, removeFromCart, placeOrder}}>
            {props.children}
        </PicContext.Provider>
    );

}
export {PicContextProvider, PicContext};