import React from "react";
import { motion } from "framer-motion";
import { FaGooglePlay, FaApple } from "react-icons/fa"; // Import icons
import appImage from "../assets/appimage.jpg";

const AppImage = () => {
    return (
        <section className="relative flex w-[95%] md:w-[90%] mx-auto overflow-hidden px-6 py-12">
            {/* Background Image */}
            <motion.div
                className="relative w-full h-[70vh] sm:h-[50vh] rounded-xl overflow-hidden bg-primary"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <img
                    src={appImage}
                    alt="App Preview"
                    className="w-full mx-auto h-full object-cover"
                />

                 

                {/* Text Content (Inside Image, Left Aligned) */}
                <motion.div
                    className="absolute left-6 md:left-12 top-20  text-secondary max-w-[60%] md:max-w-[50%]"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold leading-snug">
                        Download Food App <br />
                        Order Today!
                    </h2>
                    <p className="mt-4 text-sm md:text-lg">
                        Get your favorite meals delivered to your doorstep with just a tap.
                    </p>

                    {/* Download Buttons */}
                    <div className="flex flex-col md:flex-row gap-3 mt-5">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 bg-white text-black py-2 px-4 md:py-3 md:px-5 rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300"
                        >
                            <FaGooglePlay className="text-lg md:text-xl" />
                            <span className="text-sm md:text-base">Google Play</span>
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 bg-white text-black py-2 px-4 md:py-3 md:px-5 rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300"
                        >
                            <FaApple className="text-lg md:text-xl" />
                            <span className="text-sm md:text-base">App Store</span>
                        </motion.button>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default AppImage;
