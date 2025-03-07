import React, { useContext } from 'react'
import { MenuContext } from '../Context/MenuContext'
import { FaRegEye, FaRegHeart, FaStar } from 'react-icons/fa'
import { IoMdCart } from 'react-icons/io'

const Product = (props) => {
    const { id, name, image, category, price, amountInStore } = props.data

    const { addToCart, cartItems } = useContext(MenuContext)
    const cartItemAmount = cartItems[id]
    return (
        <div key={id} className="relative bg-white rounded-2xl shadow-lg p-2 group hover:shadow-xl transition-all">
            {/* Food Image */}
            <img src={image} alt={name} className="max-w-[30rem] w-[10rem] h-auto mx-auto object-cover rounded-t-lg" />


            {/* Content */}
            <div className="p-3 text-center">
                <p className="text-sm text-gray-500">{category}</p>
                <div className="flex justify-center gap-1 text-yellow-500 my-2">
                    {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                    ))}
                </div>
                <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
                <h3 className="text-lg text-primary font-bold mt-2">${price}</h3>
            </div>

            {/* Icons */}
            <div className="flex items-center justify-center my-5 gap-6">
                {/* Eye & Heart (Hidden Initially, Visible on Hover) */}
                <FaRegEye className="text-[3rem] bg-white text-black hover:bg-primary hover:text-white p-4 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/*  */}

                {/* <button className="inline-flex text-xs bg-gray-100 p-3 rounded-lg" onClick={() => addToCart(id)}>Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button> */}

                <button onClick={() => addToCart(id)}>
                    <IoMdCart className="text-[3rem] bg-secondary text-white hover:bg-primary duration-300 p-4 rounded-full shadow-md" />{cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
                {/*  */}
                <FaRegHeart className="text-[3rem] bg-white text-black hover:bg-primary hover:text-white p-4 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
        </div >
    )
}

export default Product
