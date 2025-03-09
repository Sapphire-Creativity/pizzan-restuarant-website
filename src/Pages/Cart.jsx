import React, { useContext } from 'react'
import { MenuContext } from '../Context/MenuContext'
import heroImage from '../assets/offer_banner_1.jpg'
import OtherHeader from '../Components/OtherHeader'
import { MainFoodMenu } from '../assets/data'
import CartItem from '../Components/CartItem'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(MenuContext)
    const totalAmount = getTotalCartAmount()
    const navigate = useNavigate()

    return (
        <div>
            {/* Hero Header */}
            <OtherHeader title="Cart Items" subTitle="" backgroundImage={heroImage} />

            <div className="container mx-auto px-6 py-20">
                {/* Cart Items Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {MainFoodMenu.map((product) => {
                        if (cartItems[product.id] !== 0) {
                            return <CartItem key={product.id} data={product} />
                        }
                    })}
                </div>

                {/* Checkout Section */}
                {totalAmount > 0 ? (
                    <div className="my-20 text-center">
                        <p className="text-xl font-semibold text-gray-800">Subtotal: <span className="text-primary">${totalAmount}</span></p>
                        <div className="flex items-center justify-center mt-6 gap-6">
                            <button
                                className="px-6 py-3 bg-secondary text-white font-medium rounded-lg hover:bg-primary transition-all duration-300"
                                onClick={() => { navigate("/menu"); window.scrollTo(0, 0) }}>
                                Continue Shopping
                            </button>
                            <button
                                className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-secondary transition-all duration-300"
                                onClick={() => { navigate("/checkout"); window.scrollTo(0, 0) }}>
                                Checkout
                            </button>
                        </div>
                    </div>
                ) : (
                    <h1 className="text-center text-2xl text-gray-600 font-semibold mt-16">
                        Your Cart is Empty 🛒
                    </h1>
                )}
            </div>
        </div>
    )
}

export default Cart
