import React, { createContext, useState } from 'react'
import { SlideFoodMenu } from '../assets/data'

// create content
export const MenuContext = createContext(null)

const getDefaultCart = () => {
	let cart = {}
	for (let i = 1; i < SlideFoodMenu.length + 1; i++) {
		cart[i] = 0
	}
	return cart
}
const MenuContextProvider = (props) => {
	const [cartItems, setCartItems] = useState(getDefaultCart)
	const [favouriteItems, setFavouriteItems] = useState(SlideFoodMenu)

	//Function to add favourite items
	const addFavouriteItems = (itemId) => {
		setFavouriteItems((prev) => ({ ...prev, [itemId]: prev[itemId] }))
	}

	// Function to add to cart
	const addToCart = (itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
	}
	// Function to remove from cart
	const removeFromCart = (itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
	}

	// Function to update item count
	const updateCartItemCount = (newAmount, itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: newAmount }))
	}



	// Function to get total cart amount
	const getTotalCartAmount = () => {
		let totalAmount = 0;
		for (const item in cartItems) {
			if (cartItems[item] > 0) {
				let itemInfo = SlideFoodMenu.find((product) => product.id === Number(item))
				totalAmount += cartItems[item] * itemInfo.price
			}
		}
		return totalAmount
	}




	const contextValue = { cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount, favouriteItems, addFavouriteItems }
	console.log(cartItems)
	return (
		<MenuContext.Provider value={contextValue}>
			{props.children}
		</MenuContext.Provider>
	)
}

export default MenuContextProvider
