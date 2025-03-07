import React, { useContext } from 'react'
import { MenuContext } from '../Context/MenuContext'

const CartItem = (props) => {
    const { id, name, image, category, price } = props.data
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(MenuContext)

    return (
        <div className="relative flex flex-col items-center w-full">
            {/* 🔴 Red Cart Item Indicator */}
            {cartItems[id] > 0 && (
                <div className="absolute -top-2 -left-2 bg-red-600 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full animate-bounce shadow-lg">
                    {cartItems[id]}
                </div>
            )}

            <div className="flex items-center gap-6 p-6 rounded-xl shadow-lg border border-gray-200 max-w-2xl w-full bg-white hover:shadow-2xl transition duration-300">

                {/* 🍔 Product Image */}
                <img src={image} alt={name} className="w-20 h-20 object-cover rounded-lg shadow-md" />

                {/* 📝 Product Info */}
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                    <p className="text-sm text-gray-500">{category}</p>
                    <h3 className="text-lg font-bold text-primary">${price.toFixed(2)}</h3>

                    {/* 🔢 Quantity Controls */}
                    <div className="flex items-center mt-4 bg-gray-200 rounded-md overflow-hidden shadow-sm w-max">
                        <button
                            onClick={() => removeFromCart(id)}
                            className="px-3 py-2 bg-gray-300 hover:bg-red-500 hover:text-white text-gray-800 font-bold transition-all duration-300">
                            −
                        </button>
                        <input
                            type="number"
                            value={cartItems[id]}
                            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
                            className="w-12 text-center border-0 bg-gray-200 text-gray-800 font-semibold focus:outline-none"
                        />
                        <button
                            onClick={() => addToCart(id)}
                            className="px-3 py-2 bg-gray-300 hover:bg-primary hover:text-white text-gray-800 font-bold transition-all duration-300">
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
