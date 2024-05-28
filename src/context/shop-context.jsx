import React, { useState } from "react";
import PRODUCTS from "../helpers/Products";

// Creating Context which will allow me to pass data directly from parent to child component
// It handles the problem of prop drilling which is that we have to keep passing data from parent to child component
export const ShopContext = React.createContext()

const getDefaultCart = function () {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}

// The 'Provider' Component is just a wrapper around the ShopContext which will tell which components are going to consume the data.
// We will also define the states, functions, etc in the 'Provider' component so that we can use them in the child components.
export const ShopContextProvider = function (props) {
    // Setting the cart items state in the context so I don't have to pass it through one component to another and so on
    const [cartItems, setCartItems] = useState(getDefaultCart())

    // This function takes the item id and adds its value by one
    const addToCart = function (itemId) {
        setCartItems(function (prevCart) {
            return { ...prevCart, [itemId]: prevCart[itemId] + 1 }
        })
    }

    // This function also takes the item id and decreases its value by one
    const removeFromCart = function (itemId) {
        setCartItems((prevCart) => {
            return { ...prevCart, [itemId]: prevCart[itemId] - 1 }
        })
    }

    console.log(cartItems);

    return (
        <ShopContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {props.children}
        </ShopContext.Provider>
    )
}