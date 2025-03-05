import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../assets/about_1.png";
import { BsArrowRight } from "react-icons/bs";
import { FaLeaf, FaUtensils, FaHome, FaShoppingCart } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";

const AboutSection = () => {
    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 py-20 px-5 overflow-x-hidden">

            {/* Image Section with Breathing and Scroll Animation */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false }} // Ensures animation repeats on revisit
                className="flex justify-center"
            >
                <motion.img
                    src={aboutImage}
                    alt="About Pizzan"
                    className="w-full max-w-[700px] object-cover"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                />
            </motion.div>

            {/* Text Section with Fade and Slide Animation */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: false }}
                className="flex flex-col"
            >
                <h3 className="font-lobster text-primary text-2xl">About Us</h3>
                <span className="bg-primary w-[80px] h-[2px] my-2"></span>
                <h2 className="text-gray-700 font-black text-3xl sm:text-4xl my-2 leading-snug">
                    A Culinary Journey of Flavor & Passion
                </h2>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                    Welcome to <strong>Pizzan</strong>, where every dish tells a story, and every bite is a
                    celebration of flavor. More than just a place to eat, we are a destination for food lovers
                    who crave authentic, handcrafted cuisine made with love and the finest ingredients.
                </p>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg mt-3">
                    What started as a passion for cooking and a dream to bring people together over great food has now become a beloved gathering spot for families, friends, and food enthusiasts.
                </p>

                {/* Feature List with Staggered Animation */}
                <ul className="mt-6 flex flex-wrap gap-4">
                    {[
                        { icon: <FaLeaf />, text: "Fresh Ingredients" },
                        { icon: <FaUtensils />, text: "Handcrafted Dishes" },
                        { icon: <FaHome />, text: "Cozy Atmosphere" },
                        { icon: <SiCodechef />, text: "Passionate Chefs" },
                        { icon: <FaShoppingCart />, text: "Order Online & Dine-In" }
                    ].map((item, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            viewport={{ once: false }}
                            className="flex items-center gap-3 text-gray-700 text-lg"
                        >
                            <span className="text-primary text-2xl">{item.icon}</span>
                            {item.text}
                        </motion.li>
                    ))}
                </ul>

                {/* Button with Hover and Press Animation */}
                <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0,0,0,0.2)" }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg flex items-center text-center justify-center gap-4 shadow-md hover:bg-secondary duration-500 transition-all"
                >
                    Learn More <BsArrowRight />
                </motion.button>
            </motion.div>


        </div>
    );
};

export default AboutSection;
