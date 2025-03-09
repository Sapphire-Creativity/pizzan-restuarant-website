import React, { useContext } from "react";
import { MenuContext } from "../Context/MenuContext";
import { MainFoodMenu } from "../assets/data";
import OtherHeader from "./OtherHeader";
import heroImage from "../assets/offer_banner_1.jpg";
import { FaHeartBroken } from "react-icons/fa";
import Header from "./Header";
import { IoClose } from "react-icons/io5";

const FavouriteItems = () => {
    const { favouriteItems, toggleFavouriteItem, addToCart, cartItems } = useContext(MenuContext);


    // Map IDs to actual items
    const favouriteList = MainFoodMenu.filter((item) => favouriteItems.includes(item.id));

    return (
        <div>
            {/* Hero Header */}
            <OtherHeader title="Wishlist" subTitle="" backgroundImage={heroImage} />

            <div className="container">
                <Header subTitle="See What you Love!" title="Your Wishlist" />


                {favouriteList.length > 0 ? (
                    <div className="flex flex-col gap-6 items-center my-16">
                        {favouriteList.map((item) => (
                            <div key={item.id} className="relative flex flex-col items-center w-full max-w-2xl">
                                {/* ❤️ Wishlist Badge */}
                                <div
                                    className="absolute -top-2 -left-2 bg-red-600 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full animate-pulse shadow-lg cursor-pointer"
                                    onClick={() => toggleFavouriteItem(item.id)}
                                >
                                    <IoClose />
                                </div>

                                <div className="flex items-center gap-6 p-6 rounded-xl shadow-lg border border-gray-200 w-full bg-white hover:shadow-2xl transition duration-300">
                                    {/* 🍔 Product Image */}
                                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg shadow-md" />

                                    {/* 📝 Product Info */}
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                                        <p className="text-sm text-gray-500">{item.category}</p>
                                        <h3 className="text-lg font-bold text-primary">${item.price.toFixed(2)}</h3>

                                        {/* ➕ Add to Cart Button */}
                                        <button
                                            onClick={() => addToCart(item.id)}
                                            className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-300"
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center h-60 text-gray-500">
                        <FaHeartBroken className="text-6xl animate-pulse text-red-400 mb-3" />
                        <p className="text-lg font-semibold">Your wishlist is empty!</p>
                        <p className="text-sm">Start adding your favorite items now ❤️</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FavouriteItems;
