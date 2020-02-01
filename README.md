# Picsome mock e-commerce React App

I coded this mock e-commerce app using **ReactJS** which allows users to look at the photos available and choose some of them to be printed and shipped (theoretically) by placing an order. The images displayed can be favorited and/or added to the cart. Then over in the cart page, you can see a list of images that you have chosen. You are also able remove some if you change your mind. You can see the grand total of what the prints are going to cost. When you click the 'Place Order' button, it simulates a real order taking place by waiting 3 seconds, logging a message to the console and clearing the cart. 


When the app mounts, it fetches the JSON data from an API and instantiates all the image components. I have used advanced React features in building this app including React Router, Hooks (incl custom hooks), Context and PropTypes. I have also used window.localStorage object to store/preserve the state of images locally within the user's browser.

