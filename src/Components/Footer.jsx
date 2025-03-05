import React from "react";
import { IoIosSend } from "react-icons/io";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import logo from "../assets/logo.svg";

const Footer = () => {
    return (
        <motion.footer
            className="bg-secondary text-white w-full mt-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            {/* Newsletter Section */}
            <motion.div
                className="rounded-xl shadow-lg w-[90%] md:w-[80%] mx-auto bg-white p-6 text-center flex flex-col md:flex-row items-center justify-between md:gap-10 lg:gap-28 -translate-y-12"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <h2 className="text-secondary font-extrabold text-lg md:text-2xl">
                    Subscribe to our Newsletter!
                </h2>

                {/* Input & Button */}
                <motion.div
                    className="flex items-center justify-between mt-5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <input
                        type="email"
                        placeholder="Enter Email Address"
                        className="outline-none text-gray-500 px-4 py-3 w-full max-w-[200px] md:max-w-[800px] rounded-lg border border-secondary focus:ring-1 focus:ring-secondary transition-all duration-300"
                    />
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 bg-primary text-white p-4 sm:px-6 hover:bg-secondary transition-all duration-300 rounded-lg text-xs sm:text-sm"
                    >
                        SUBSCRIBE <IoIosSend />
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* Footer Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 py-16 px-10 gap-8">
                {/* Logo & Socials */}
                <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <img src={logo} alt="Pizzan-logo" className="w-32 md:w-40" />
                    <p className="text-gray-300 text-sm">
                        We believe that great food shouldn't break the bank. That's why we offer affordable options without compromising on taste.
                    </p>
                    <div className="flex items-center gap-5">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-link"><FaFacebookF /></a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-link"><RiInstagramFill /></a>
                        {/* <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-link"><FaXTwitter /></a> */}
                        <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="social-link"><FaPinterestP /></a>
                    </div>
                </motion.div>

                {/* Explore Section */}
                <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h3 className="font-lobster text-xl text-white">Explore</h3>
                    <ul className="space-y-2">
                        {["About Us", "Services", "Our Chefs", "Shop", "Reservation", "Contact Us"].map((item, index) => (
                            <li key={index} className="flex items-center gap-2 hover:text-primary transition-all">
                                <IoIosArrowRoundForward />
                                <Link to={`/${item.toLowerCase().replace(/ /g, "-")}`}>{item}</Link>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Quick Links */}
                <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h3 className="font-lobster text-xl text-white">Quick Links</h3>
                    <ul className="space-y-2">
                        {["Sign Up", "Sign In", "Become a Seller", "Terms & Conditions", "Privacy Policy"].map((item, index) => (
                            <li key={index} className="flex items-center gap-2 hover:text-primary transition-all">
                                <IoIosArrowRoundForward />
                                <Link to={`/${item.toLowerCase().replace(/ /g, "-")}`}>{item}</Link>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Contact Section */}
                <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h3 className="font-lobster text-xl text-white">Get In Touch</h3>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <FaMapLocationDot className="text-xl" />
                            <p className="text-sm">203 Fake St. Mountain View, San Francisco, California, USA</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <IoMdCall className="text-xl" />
                            <p className="text-sm">+2 392 3929 210</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <MdEmail className="text-xl" />
                            <p className="text-sm">info@pizzan.com</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Copyright Section */}
            <motion.div
                className="text-center py-4 bg-primary text-white text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                &copy; {new Date().getFullYear()} Pizzan. All Rights Reserved.
            </motion.div>
        </motion.footer>
    );
};

export default Footer;
