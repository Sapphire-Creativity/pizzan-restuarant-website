import React, { useState } from 'react';
import { MainFoodMenu } from '../assets/data';
import { FaRegEye, FaRegHeart, FaStar } from 'react-icons/fa';
import { IoMdCart } from 'react-icons/io';
import Header from './Header';
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const FoodCategory = () => {
    const [items, setItems] = useState(MainFoodMenu.slice(0, 4));

    const filterCategory = (dataItem) => {
        const updatedItems = MainFoodMenu.filter((currentData) => currentData.category === dataItem).slice(0, 4);
        setItems(updatedItems);
    };

    const navigate = useNavigate()
    return (
        <section className="container">
            <Header subTitle="Popular Menu" title="Our Popular Delicious Foods" />

            {/* Scrollable Buttons */}
            <div className="flex overflow-x-scroll sm:overflow-x-hidden gap-3 my-4 p-4 items-center justify-center scrollbar-hide">
                {['All', 'Pizza', 'Salads', 'Burgers', 'Appetizers', 'Desserts', 'Drinks', 'Main Course'].map((category) => (
                    <button
                        key={category}
                        className="whitespace-nowrap px-4 py-2 bg-primary text-white rounded-lg shadow-md hover:scale-105 transition-transform"
                        onClick={() => (category === 'All' ? setItems(MainFoodMenu.slice(0, 4)) : filterCategory(category))}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Food Items Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
                {items.map((data) => (
                    <div key={data.id} className="relative bg-white rounded-2xl shadow-lg p-4 group hover:shadow-xl transition-all">
                        {/* Food Image */}
                        <img src={data.image} alt={data.name} className="max-w-[45rem] h-auto mx-auto object-cover rounded-t-lg" />

                        {/* Content */}
                        <div className="p-3 text-center">
                            <p className="text-sm text-gray-500">{data.category}</p>
                            <div className="flex justify-center gap-1 text-yellow-500 my-2">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                            <h4 className="text-lg font-semibold text-gray-800">{data.name}</h4>
                            <h3 className="text-lg text-primary font-bold mt-2">${data.price}</h3>
                        </div>

                        {/* Icons */}
                        <div className="flex items-center justify-center my-5 gap-6">
                            {/* Eye & Heart (Hidden Initially, Visible on Hover) */}
                            <FaRegEye className="text-[3rem] bg-white text-black hover:bg-primary hover:text-white p-4 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <IoMdCart className="text-[3rem] bg-secondary text-white hover:bg-primary duration-300 p-4 rounded-full shadow-md" />
                            <FaRegHeart className="text-[3rem] bg-white text-black hover:bg-primary hover:text-white p-4 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-center mt-14">
                <button className='btn btn-primary' onClick={() => { navigate("/menu"); window.scrollTo(0, 0) }}>Explore All Menu <BsArrowRight /></button>
            </div>


        </section>
    );
};

export default FoodCategory;
