import { motion } from "framer-motion";
import React, { useState, useContext } from "react";
import logo from "../assets/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaOpencart, FaRegHeart } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { TbMenu3 } from "react-icons/tb";
import { HiChevronRight } from "react-icons/hi";
import { MenuContext } from '../Context/MenuContext'
import { SlideFoodMenu } from '../assets/data'
const NavBar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const { updateCartItemCount } = useContext(MenuContext)


    const navigate = useNavigate()


    //function to toggle Navbar
    const toggleNavbar = () => {
        setShowNavbar(!showNavbar);
    };



    return (
        <div className="fixed top-0 w-full z-50">
            <div className="w-full static z-50 flex items-center justify-between bg-white py-3 px-5 sm:py-3 sm:px-10 soft-shadow">
                {/* Logo */}
                <div>
                    <img
                        src={logo}
                        alt="Pizzan-logo"
                        className="w-[5rem] sm:w-[12rem] md:w-[20rem] max-w-24"
                    />
                </div>

                {/* Menu */}
                <div className="hidden lg:flex">
                    <ul className="flex items-center justify-center text-sm gap-5 md:gap-10 font-medium ">
                        <NavLink to="/">
                            <li>Home</li>
                        </NavLink>
                        <NavLink to="menu">
                            <li>Menu</li>
                        </NavLink>
                        <NavLink to="shop">
                            <li>Shop</li>
                        </NavLink>
                        <NavLink to="blog">
                            <li>Blog</li>
                        </NavLink>
                        <NavLink to="contact">
                            <li>Contact Us</li>
                        </NavLink>
                    </ul>
                </div>

                {/* Buttons */}

                <div className="flex items-center justify-center gap-4 sm:gap-8">
                    <div className="flex items-center justify-center gap-2 sm:gap-5">
                        <FiSearch className="p-3 rounded-full border border-primary text-primary hover:text-secondary hover:border-secondary transition-all duration-300 text-[2.5rem]" />


                        <FaOpencart onClick={() => {
                            navigate("/cart");
                            window.scrollTo(0, 0);
                        }} className="hidden sm:inline-flex p-3 rounded-full border border-primary text-primary hover:text-secondary hover:border-secondary transition-all duration-300 text-[2.5rem]" />
                        <FaRegHeart onClick={() => {
                            navigate("/favourite-items");
                            window.scrollTo(0, 0);
                        }} className="hidden sm:inline-flex p-3 rounded-full border border-primary text-primary hover:text-secondary hover:border-secondary transition-all duration-300 text-[2.5rem]" />

                    </div>

                    <button className="btn btn-primary">
                        Book an Order <IoIosSend />
                    </button>

                    {/* Menu Icon */}
                    <button onClick={toggleNavbar} className="inline-block lg:hidden">
                        <TbMenu3 className="p-3 rounded-full border border-primary text-primary hover:text-secondary hover:border-secondary transition-all duration-300 text-[2.5rem]" />
                    </button>
                </div>
            </div>

            {/* Mobile Navbar */}
            {showNavbar && (
                <>
                    {/* Faded Background Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
                        onClick={toggleNavbar} // Clicking outside closes the menu
                    />

                    {/* Mobile Menu */}
                    <motion.div
                        initial={{ x: "-100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "-100%", opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="fixed left-0 top-0 bottom-0 w-[14rem] h-screen bg-white shadow-lg p-10 z-50"
                    >
                        <div>
                            <img
                                src={logo}
                                alt="Pizzan-logo"
                                className="w-[7rem] sm:w-[14rem] md:w-[20rem] max-w-36"
                            />
                        </div>
                        <ul className="pt-24 p-5 flex flex-col items-left justify-center text-base gap-8 font-medium">
                            <NavLink to="/" onClick={toggleNavbar}>
                                <li className="flex justify-between items-center group hover:text-red-500 transition duration-300">
                                    Home <HiChevronRight className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
                                </li>
                            </NavLink>
                            <NavLink to="menu" onClick={toggleNavbar}>
                                <li className="flex justify-between items-center group hover:text-red-500 transition duration-300">
                                    Menu <HiChevronRight className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
                                </li>
                            </NavLink>
                            <NavLink to="shop" onClick={toggleNavbar}>
                                <li className="flex justify-between items-center group hover:text-red-500 transition duration-300">
                                    Shop <HiChevronRight className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
                                </li>
                            </NavLink>
                            <NavLink to="cart" onClick={toggleNavbar}>
                                <li className="flex justify-between items-center group hover:text-red-500 transition duration-300">
                                    Cart <HiChevronRight className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
                                </li>
                            </NavLink>
                            <NavLink to="favourite-items" onClick={toggleNavbar}>
                                <li className="flex justify-between items-center group hover:text-red-500 transition duration-300">
                                    Wishlist <HiChevronRight className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
                                </li>
                            </NavLink>
                            <NavLink to="blog" onClick={toggleNavbar}>
                                <li className="flex justify-between items-center group hover:text-red-500 transition duration-300">
                                    Blog <HiChevronRight className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
                                </li>
                            </NavLink>
                            <NavLink to="contact" onClick={toggleNavbar}>
                                <li className="flex justify-between items-center group hover:text-red-500 transition duration-300">
                                    Contact Us <HiChevronRight className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
                                </li>
                            </NavLink>
                        </ul>
                    </motion.div>
                </>
            )}
        </div>


    );
};

export default NavBar;


